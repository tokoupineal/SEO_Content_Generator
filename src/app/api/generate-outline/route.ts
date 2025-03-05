import { NextResponse } from 'next/server';
import { getApiKey } from '@/utils/api';

export async function POST(request: Request) {
  try {
    const { keywords } = await request.json();
    
    if (!keywords) {
      return NextResponse.json(
        { error: 'キーワードが指定されていません' },
        { status: 400 }
      );
    }

    // APIキーを取得（サーバーサイドでのみアクセス可能）
    const apiKey = getApiKey();
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API設定が不完全です' },
        { status: 500 }
      );
    }

    // Dify APIを呼び出す
    const response = await fetch('https://hiroto243.com/v1/chat-messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "inputs": {
          "keyword": keywords
        },
        "query": "このキーワードに関する構成案を作成してください",
        "response_mode": "blocking",
        "user": "user-" + Math.random().toString(36).substring(2, 15)
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Dify API error:', errorText);
      return NextResponse.json(
        { error: 'Dify APIリクエストに失敗しました' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Dify APIからの応答を解析
    let outline = '';
    if (data && data.answer) {
      outline = data.answer;
    } else if (data && data.data && data.data.outputs && data.data.outputs.answer) {
      outline = data.data.outputs.answer;
    } else {
      console.error('Unexpected API response format:', data);
      return NextResponse.json(
        { error: '予期しないAPIレスポンス形式です' },
        { status: 500 }
      );
    }

    return NextResponse.json({ outline });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
} 