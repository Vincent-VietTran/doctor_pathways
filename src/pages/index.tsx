import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import Landing from '@/components/home/landing'

const Home: NextPageWithLayout = () => {
  return <Landing />
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
