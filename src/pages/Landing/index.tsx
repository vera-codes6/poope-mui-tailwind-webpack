import { Hero, About, Tokenomics, Roadmap, Expanding, Updating, Community, FAQ } from '@/views/Landing'
import MouseDown from '@/components/MouseDown'

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
      <MouseDown />
    </>
  )
}

export default Landing
