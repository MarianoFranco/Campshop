export const printBannerInTheDom = (
  domElementInHtml,
  arrayImGoingToGoTrough,
) => {
  arrayImGoingToGoTrough.forEach(({ hero_url, name }) => {
    domElementInHtml.innerHTML += `
			
        <img src="${hero_url}" alt="${name}" class="hero__img" />

		`;
  });
};
