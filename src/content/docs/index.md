---
title: "Course Notes"
description: "Personal notes for [Course Name]"
template: splash
hero:
  tagline: "Replace this with your course name and a short description"
  actions:
    - text: Notes
      link: /notes/
      icon: right-arrow
    - text: Resources
      link: /resources/
      icon: right-arrow
      variant: minimal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
  <Card title="Notes" icon="pencil">
    Lecture notes, readings, and key concepts.
  </Card>
  <Card title="Resources" icon="list-format">
    Reference materials, formulas, and study guides.
  </Card>
</CardGrid>
