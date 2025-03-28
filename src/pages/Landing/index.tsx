import { Hero, About, Tokenomics, Roadmap, Expanding, Updating, Community, FAQ } from '@/views/Landing'
import ScrollDown from '@/components/ScrollDown'

const Landing = () => {
  return (
    <>
      <Hero sectionId='hero' />
      <About sectionId='about' />
      <Tokenomics sectionId='tokenomics' />
      <Roadmap sectionId='roadmap' />
      <Expanding sectionId='expand' />
      <Updating sectionId='updating' />
      <Community sectionId='community' />
      <FAQ sectionId='faq' />
      <ScrollDown />
    </>
  )
}

export default Landing
