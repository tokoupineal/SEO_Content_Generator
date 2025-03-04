import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">SEO記事生成ツール</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>記事の設定</CardTitle>
            <CardDescription>
              記事のテーマとキーワードを入力してください
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">記事タイトル</Label>
              <Input id="title" placeholder="記事のタイトルを入力してください" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="keywords">メインキーワード</Label>
              <Input id="keywords" placeholder="主要なキーワードを入力してください" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">記事の概要</Label>
              <Textarea 
                id="description" 
                placeholder="記事の概要や目的を入力してください"
                rows={4}
              />
            </div>
            
            <Button className="w-full">記事を生成</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>生成された記事</CardTitle>
            <CardDescription>
              AIによって生成された記事がここに表示されます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="min-h-[400px]" 
              placeholder="生成された記事がここに表示されます..."
              readOnly
            />
          </CardContent>
        </Card>
      </div>
    </main>
  )
} 