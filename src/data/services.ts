/**
 * Proposed editable service categories — subject to confirmation.
 * Do not treat these as verified company offerings until confirmed.
 */
export interface Service {
  id: string
  number: string
  title: string
  description: string
  image: string
  placeholder: true
}

export const services: Service[] = [
  {
    id: 'general-contracting',
    number: '01',
    title: 'GENERAL CONTRACTING',
    description:
      'Proposed service category covering coordinated contracting delivery across building and civil scopes. Details subject to confirmation.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'building-construction',
    number: '02',
    title: 'BUILDING CONSTRUCTION',
    description:
      'Proposed service category for commercial and institutional building construction. Details subject to confirmation.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'civil-engineering',
    number: '03',
    title: 'CIVIL ENGINEERING',
    description:
      'Proposed service category focused on civil engineering works and site development. Details subject to confirmation.',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'structural-works',
    number: '04',
    title: 'STRUCTURAL WORKS',
    description:
      'Proposed service category for structural construction and related works. Details subject to confirmation.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'infrastructure-works',
    number: '05',
    title: 'INFRASTRUCTURE WORKS',
    description:
      'Proposed service category for infrastructure and related development works. Details subject to confirmation.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'project-management',
    number: '06',
    title: 'PROJECT MANAGEMENT',
    description:
      'Proposed service category for professional project coordination and delivery oversight. Details subject to confirmation.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
]
