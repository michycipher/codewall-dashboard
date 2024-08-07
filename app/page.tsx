import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import PostsTable from "@/components/posts/PostsTable";


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 mb-5 md:flex-row flex-wrap">
        <DashboardCard 
         title="post"
         count={100}
         icon={<Newspaper className='' size={72} />} 
        />
        <DashboardCard 
         title="Categories"
         count={10}
         icon={<Folder className='' size={72} />} 
        />
        <DashboardCard 
         title="Users"
         count={50}
         icon={<User className='' size={72} />} 
        />
        <DashboardCard 
         title="Comments"
         count={200}
         icon={<MessageCircle className='' size={72} />} 
        />
        {/* Remove tomorrow 8th of August */}
        <DashboardCard 
         title="post"
         count={100}
         icon={<Newspaper className='' size={72} />} 
        />
      </div>

      <PostsTable title="Latest Posts" limit={5}/>
    </>
  );
}

