import { HeroVideo } from '@/components/home/hero-video'
import { StatsBand } from '@/components/home/stats-band'
import { CredentialsBar } from '@/components/home/credentials-bar'
import { ServiceLanes } from '@/components/home/service-lanes'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { ProjectReels } from '@/components/project-reels'
import { reels } from '@/content/reels'
import { ServiceAreas } from '@/components/home/service-areas'
import { DirectorsSection } from '@/components/directors-section'
import { ProcessSteps } from '@/components/process-steps'
import { ReviewsSection } from '@/components/reviews-section'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <StatsBand />
      <CredentialsBar />
      <ServiceLanes />
      <FeaturedProjects />
      <ProjectReels
        reels={reels}
        intro="Short clips from recent sites — a feel for the finish and the detail our directors sign off on."
      />
      <DirectorsSection />
      <ProcessSteps />
      <ReviewsSection />
      <ServiceAreas />
      <div className="pt-24">
        <CtaBand image="/images/osborne-lane-cove.jpg" />
      </div>
    </>
  )
}
