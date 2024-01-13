import { Metadata } from 'next'

import { getCodeBayuDataServices } from '@/services/codebayu'
import React from 'react'

import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import { METADATA } from '@/common/constant/metadata'
import { IRoadmap } from '@/common/types/roadmap'

import Roadmap from '@/modules/roadmap'

export const metadata: Metadata = {
  title: `Roadmap ${METADATA.exTitle}`,
  description: 'Learning path recomendation and free course playlist for software engineer',
  alternates: {
    canonical: `${process.env.DOMAIN}/roadmap`
  }
}

const PAGE_TITLE = 'Roadmap'
const PAGE_DESCRIPTION = 'Learning path recomendation and free course playlist'

export default async function RoadmapPage() {
  const roadmaps = await getRoadmaps()
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Roadmap roadmaps={roadmaps} />
      </Container>
    </>
  )
}

async function getRoadmaps(): Promise<IRoadmap> {
  const response = await getCodeBayuDataServices()
  return response.roadmaps
}
