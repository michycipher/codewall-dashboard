import React from 'react'
import { Card, CardContent } from '../ui/card'

import { LucideIcon } from 'lucide-react'

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>
}

const DashboardCard = ({title, count,icon }: DashboardCardProps) => {
  return (
    
      <Card className='bg-[#dffadf] dark:bg-slate-800 p-4 pb-0'>
        <CardContent>
          <h3 className='text-3xl text-center mb-4 font-bold dark:text-slate-200'>{ title }</h3>
          <div className='flex gap-5 justify-center items-center' >
          {/* <Newspaper className='' size={72}/> */}
          { icon }
          <h3 className='text-5xl font-semibold dark:text-slate-200'> {count} </h3>
          </div>
        </CardContent>
      </Card>
    
  )
}

export default DashboardCard
  