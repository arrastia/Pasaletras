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
    pages.map(item => ({
      title: `${messages['page']} ${item.page}`,
      text: pasaletras(item.page, bgColor[0], item.web),
      id: item.page,
      bgColor: bgColor[0],
      redirect: item.web
    }))
  );
  return content.flat();
};

export const GameUtils = { loadData };
