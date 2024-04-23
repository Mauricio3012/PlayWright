FROM mcr.microsoft.com/playwright:v1.44.0-next-jammy

WORKDIR /playwright

COPY tests /playwright/tests
COPY package.json /playwright
COPY node_modules /playwright/node_modules

RUN npx playwright test api