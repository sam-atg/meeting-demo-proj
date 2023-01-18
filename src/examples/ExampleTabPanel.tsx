import type { PrismProps } from '@mantine/prism';
import { Prism } from '@mantine/prism';
import React from 'react';

export interface ExampleTabs {
  name: string;
  value?: string;
  icon?: React.ReactNode;
  code: string;
  lang?: PrismProps['language'];
  highlights?: PrismProps['highlightLines'];
}

interface ExampleTabPanelProps {
  defaultValue?: string;
  defaultLang?: PrismProps['language'];
  tabs: ExampleTabs[];
}

export function ExampleTabPanel({ defaultValue, defaultLang = 'tsx', tabs }: ExampleTabPanelProps) {
  const [firstTab] = tabs;
  return (
    <Prism.Tabs defaultValue={defaultValue ?? firstTab.value ?? firstTab.name}>
      <Prism.TabsList>
        {tabs.map(({ value, name, icon }) => {
          const label = value ?? name;
          return (
            <Prism.Tab key={label} value={label} icon={icon}>
              {name}
            </Prism.Tab>
          );
        })}
      </Prism.TabsList>
      <>
        {tabs.map(({ value, name, lang, code }) => {
          const label = value ?? name;
          return (
            <Prism.Panel key={label} language={lang ?? defaultLang} value={label}>
              {code}
            </Prism.Panel>
          );
        })}
      </>
    </Prism.Tabs>
  );
}
