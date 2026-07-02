import Link from 'next/link'
import { Media } from '@/components/Media'
import type { Service } from '@/payload-types'

type Props = {
  service: Service
}

export const ServiceCard = ({ service }: Props) => {
   console.log(service.heroImage)
  return (
    <article className="border rounded-lg overflow-hidden bg-card">
      <div>
        {service.heroImage &&
          typeof service.heroImage !== 'string' && (
            <Media resource={service.heroImage} size="33vw" />
          )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">
          {service.title}
        </h3>

        {service.excerpt && (
          <p className="mt-3 text-muted-foreground">
            {service.excerpt}
          </p>
        )}

        <Link
          href={`/services/${service.slug}`}
          className="inline-block mt-5 font-medium"
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}