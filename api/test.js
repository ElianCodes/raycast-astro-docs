import { writeFile } from 'fs/promises';
import ts from 'typescript';

const tsTranspile = (tsCode) => {
  return ts.transpileModule(tsCode, {});
};

export const start = async (lang = 'en') => {
  const items = [];
  const res = await fetch(
    'https://raw.githubusercontent.com/withastro/docs/main/src/i18n/en/nav.ts'
  )
    .then((res) => res.text())
    .then((res) => tsTranspile(res).outputText)
  await writeFile('fetchedData.cjs', tsTranspile(res).outputText);
  const rawData = (await import('./fetchedData.cjs')).default;

  rawData.default.map((item) =>
    items.push({
      title: item.text,
      url: `https://docs.astro.build/${lang}/${item.slug}`,
    })
  );

  console.log(items);
};

start();
