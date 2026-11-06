/**
 * Sample project placeholders until genuine Metro project details
 * and photographs are supplied. Stock images do NOT represent
 * completed Metro projects.
 */
export interface Project {
  id: string
  name: string
  category: string
  location: string
  description: string
  image: string
  featured?: boolean
  placeholder: true
}

export const projects: Project[] = [
  {
    id: 'placeholder-01',
    name: '[Project Name — Editable]',
    category: 'Commercial',
    location: 'Abu Dhabi, UAE',
    description:
      'Sample placeholder. Replace with a verified Metro project name, scope, and photography when available.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8624?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    placeholder: true,
  },
  {
    id: 'placeholder-02',
    name: '[Project Name — Editable]',
    category: 'Infrastructure',
    location: 'Abu Dhabi, UAE',
    description:
      'Sample placeholder. Stock photography does not represent a completed Metro project.',
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'placeholder-03',
    name: '[Project Name — Editable]',
    category: 'Structural',
    location: 'Abu Dhabi, UAE',
    description:
      'Sample placeholder awaiting verified project details and photography.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'placeholder-04',
    name: '[Project Name — Editable]',
    category: 'Civil Works',
    location: 'Abu Dhabi, UAE',
    description:
      'Sample placeholder. Replace with authentic Metro project information.',
    image:
      'https://images.unsplash.com/photo-1479839672679-e911389d3d8e?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
  {
    id: 'placeholder-05',
    name: '[Project Name — Editable]',
    category: 'Building Construction',
    location: 'Abu Dhabi, UAE',
    description:
      'Sample placeholder for gallery layout demonstration only.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    placeholder: true,
  },
]
