import { FC } from 'react';
import { capitalize } from '@/utils/string';
import { Card, Separator } from '@/components';
import { ComponentOverviewList } from '@/hooks';

interface OverviewProps {
  sections: ComponentOverviewList[];
}

const Overview: FC<OverviewProps> = ({ sections }) => (
  <div className="flex flex-col gap-4">
    {sections.map((section, i) => {
      const { classification, components } = section;
      return (
        <div
          className="w-full h-auto flex flex-col gap-2"
          key={`parentsection${classification}`}
        >
          <span className="text-xl font-semibold text-neutral-900">
            {capitalize(classification)}
          </span>
          <Separator />
          <div className="w-full h-auto grid grid-cols-5 max-laptop:grid-cols-4 max-tabletXL:grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 items-center justify-center gap-2 py-2">
            {components.map((component, j) => (
              <Card
                title={capitalize(component.name)}
                href={`/components/${classification.replace(' ', '-')}/${
                  component.path
                }`}
                key={classification + component.name + i + j}
                content={component.Component}
              />
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

export default Overview;
