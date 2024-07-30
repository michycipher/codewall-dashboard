import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Newspaper } from 'lucide-react'


const DashboardCard = () => {
  return (
    <div>
      <Card className='bg-slate-100 dark:bg-slate-800 p-4 pb-0'>
        <CardContent>
          <h3 className='text-3xl text-center mb-4 font-bold dark:text-slate-200'>Posts</h3>
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardCard
  