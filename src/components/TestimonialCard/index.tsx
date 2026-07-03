import { Media } from '@/components/Media'
import type { Testimonial } from '@/payload-types'
import RichText from '@/components/RichText'

type Props = {
  testimonial: Testimonial
}

export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <article className="border rounded-lg p-6 bg-card">
    {testimonial.photo &&
        typeof testimonial.photo !== 'string' && (
        <Media
            resource={testimonial.photo}
            className="mb-4"
        />
        )}

    <h3 className="text-xl font-semibold">
        {testimonial.name}
    </h3>

    {testimonial.position && (
        <p className="text-sm text-muted-foreground">
        {testimonial.position}
        {testimonial.company && ` - ${testimonial.company}`}
        </p>
    )}

    {testimonial.rating && (
        <p className="mt-3">
        {'⭐'.repeat(testimonial.rating)}
        </p>
    )}

    <div className="mt-4">
        {testimonial.testimonial && (
        <RichText
            data={testimonial.testimonial}
            className="mt-4"
        />
        )}
    </div>
    </article>
  )
}