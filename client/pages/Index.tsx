import React from 'react';
import { Layout, MainContent } from '@/components/layout';
import { Header } from '@/components/header';
import { FeaturedAuctionCard } from '@/components/featured-auction-card';
import { CategoriesSection } from '@/components/categories-section';
import { ContentGrid } from '@/components/content-grid';
import { BalanceSidebar } from '@/components/balance-sidebar';

export default function Index() {
  return (
    <Layout>
      {/* Header */}
      <Header />
      
      {/* Main Content with Right Sidebar */}
      <MainContent rightSidebar={<BalanceSidebar />}>
        <div className="space-y-6 lg:space-y-8">
          {/* Featured Auction Section */}
          <section>
            <FeaturedAuctionCard />
          </section>

          {/* Categories Section */}
          <section>
            <CategoriesSection />
          </section>

          {/* Content Grid */}
          <section>
            <ContentGrid />
          </section>
        </div>
      </MainContent>
    </Layout>
  );
}
