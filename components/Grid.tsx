import { gridItems } from '@/data/index'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { useTranslations } from 'next-intl'

const Grid = () => {
  const t = useTranslations("gridItems");
  const keys = ['gridItem1', 'gridItem2', 'gridItem3', 'gridItem4', 'gridItem5', 'gridItem6'] as const;

  return (
    <section id='about'>
        {/* <BentoGrid>
            {gridItems.map
            (({id, title, description, className,
            img, imgClassName, titleClassName, spareImg}) =>(
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid> */}
          <BentoGrid>
            {keys.map
            ((key) =>(
                <BentoGridItem
                    id={t.raw(`${key}.id`)}
                    key={t.raw(`${key}.id`)}
                    title={t.raw(`${key}.title`)}
                    description={t(`${key}.description`)}
                    className={t.raw(`${key}.className`)}
                    img={t.raw(`${key}.img`)}
                    imgClassName={t.raw(`${key}.imgClassName`)}
                    titleClassName={t.raw(`${key}.titleClassName`)}
                    spareImg={t.raw(`${key}.spareImg`)}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid