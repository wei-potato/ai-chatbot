import { auth } from '@/app/(auth)/auth';
import { getChatsByUserId } from '@/lib/db/queries';

// 默认用户配置
const DEFAULT_USER = {
  id: 'global-user',
  name: '公共用户',
  email: 'public@example.com',
  image: null
};

export async function GET() {
  const session = await auth();
  
  // 使用默认用户或已登录用户
  const user = session?.user || DEFAULT_USER;

  // 确保userId是字符串类型
  const chats = await getChatsByUserId({ id: user.id as string });
  return Response.json(chats);
}
