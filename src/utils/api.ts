// API関連の設定と関数

// Dify APIのベースURL
export const API_URL = 'https://hiroto243.com/v1/chat-messages';

// APIキーを取得する関数（サーバーサイドでのみ使用可能）
export const getApiKey = () => {
  return process.env.DIFY_KEY;
};

// クライアントサイドで使用可能な公開API設定
export const publicApiConfig = {
  baseUrl: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

// 構成案を生成するAPI関数
export async function generateOutline(keywords: string) {
  try {
    // サーバーサイドAPIルートを呼び出す
    const response = await fetch('/api/generate-outline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keywords }),
    });

    if (!response.ok) {
      throw new Error('APIリクエストに失敗しました');
    }

    const data = await response.json();
    return data.outline;
  } catch (error) {
    console.error('Error generating outline:', error);
    throw error;
  }
} 