const loadData = (data, messages, pasaletras) => {
  const keys = Object.keys(data);
  const result = {};
  keys.forEach(element => {
    result[element] = getPageContent(element, data, messages, pasaletras);
  });
  return result;
};

const getPageContent = (key, data, messages, pasaletras) => {
  const content = [];
  const { bgColor, pages } = data[key][0];
  content.push(
    pages.map(item => {
      return { title: `${messages['page']} ${item}`, text: pasaletras(item, bgColor[0]), id: item, bgColor: bgColor[0] };
    })
  );
  return content.flat();
};

export const GameHelpContent = { loadData };
