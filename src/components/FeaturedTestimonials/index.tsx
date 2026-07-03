import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { TestimonialCard } from '@/components/TestimonialCard'

export default async function FeaturedTestimonials() {
  const payload = await getPayload({
    config: configPromise,
  })

  const testimonials = await payload.find({
    collection: 'testimonials',
    depth: 1,
    where: {
      featured: {
        equals: true,
      },
    },
    sort: 'order',
  })

  if (!testimonials.docs.length) {
    return null
  }

  return (
    <section className="container py-20">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">
          What Our Clients Say
        </h2>

        <p className="text-muted-foreground mt-3">
          Hear from businesses we've helped grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.docs.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  )
}