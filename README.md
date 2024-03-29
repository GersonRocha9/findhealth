# Find.Health

O projeto consiste em uma plataforma de visualização de profissionais da saúde e clínicas médicas. O objetivo do projeto é ajudar pessoas que são consultadas por algum médico e depois de muito tempo tentam encontrar o mesmo médico para uma nova consulta, entretanto não possuem mais os dados daquele referido médico.

Esse projeto é fruto da elaboração do Trabalho de Conclusão de Curso (TCC) do Curso Bacharelado em Sistemas de Informação do Instituto Federal Fluminense (Instituto Federal de Educação, Ciência e Tecnologia Fluminense - IFF - Campus Centro).

## Como visualizar o projeto?

1.  **Verificando no navegador**

    O projeto está disponível no seguinte endereço: `findhealth.vercel.app`

## Funcionalidades
 - [x] Opção de fazer login, caso deseje alterar algum dado
 - [x] Opção de fazer logout
 - [x] Responsividade com menu lateral em formato de ícone hamburguer em dispositivos mobile
 - [x] Opção de atualizar dados em tempo real
 - [ ] Opção de cadastrar um novo profissional da saúde
 - [ ] Opção de editar os dados do profissional logado através de um Modal
 - [ ] Opção de fazer buscas dentro da plataforma por profissional ou clínicas
 - [ ] Dashboard com visualizalização de todos os profissionais de saúde e clínicas cadastradas (dependendo da API)


## Tecnologias utilizadas no projeto

 - [x] [React](https://pt-br.reactjs.org/)
 - [x] [Typescript](https://pt-br.reactjs.org/)
 - [x] [NextJS](https://nextjs.org/)
 - [x] [Chakra UI](https://chakra-ui.com/)
 - [x] [Emotion](https://emotion.sh/docs/styled)
 - [x] [Apexcharts](https://apexcharts.com/)
 - [x] [Framer Motion](https://www.framer.com/motion/)
 - [x] [Yup](https://github.com/jquense/yupp)
 - [x] [React Hook Form](https://react-hook-form.com/)
 - [x] [React Icons](https://react-icons.github.io/react-icons/)

## Diretórios

Estrutura do projeto.

    .
    ├── node_modules
    ├── src
    ├──────── components
    ├──────── contexts
    ├──────── pages
    ├──────── styles
    ├── .gitignore
    ├── .prettierrc
    ├── .editorconfig
    ├── .eslint.js
    ├── package.json
    └── README.md

1.  **`/node_modules`**: Este diretório contém todos os módulos de código dos quais seu projeto depende (pacotes npm) são instalados automaticamente.

2.  **`/src`**: Este diretório conterá todo o código relacionado ao que você verá no front-end do site (o que você vê no navegador), como o cabeçalho do site ou um modelo de página. `src` é uma convenção para "código fonte ".

3.  **`.gitignore`**: Este arquivo informa ao git quais arquivos ele não deve rastrear / não manter um histórico de versão.

4.  **`.prettierrc`**: Este é um arquivo de configuração para Prettier é uma ferramenta para ajudar a manter a formatação do código consistente e para manter um padrão. [Prettier](https://prettier.io/).

5.  **`.eslint.json`**: ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript. [Eslint](https://eslint.org/).

6.  **`.editorconfig`**: O EditorConfig ajuda a manter estilos de codificação consistentes para vários desenvolvedores que trabalham no mesmo projeto em vários editores e IDEs. [Editorconfig](https://editorconfig.org/)

7. **`package-lock.json`** Este é um arquivo gerado automaticamente com base nas versões exatas das dependências do npm que foram instaladas para o seu projeto. ** (Você não altera este arquivo diretamente)**

8. **`package.json`**: Um arquivo é executado para projetos Node.js, que inclui itens como metadados (nome, autor do projeto etc.). Este arquivo é como o npm sabe quais pacotes instalar para o seu projeto.
