import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName:'Aman'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header>
                
                <HeaderBox
                title='Welcome'
                type="greeting"
                user={loggedIn ?.firstName || 'Guest'}
                subtext='Access and manage your account and transactions efficiently'
                />
                
            </header>
            <TotalBalanceBox
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance = {1250.25}
            />
        </div>
    </section>
  )
}

export default Home