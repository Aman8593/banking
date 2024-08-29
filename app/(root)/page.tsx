import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName : "Aman" , lastName : "Wadgaonkar",email : "amanwadgaonkar@gmail.com"}
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
            RECENT TRANSACTION 
        </div>
        <RightSidebar
            user = {loggedIn}
            transactions = {[]}
            banks = {[{currentBalance:123.50},{currentBalance:500.50}]}
        
        />
    </section>
  )
}

export default Home