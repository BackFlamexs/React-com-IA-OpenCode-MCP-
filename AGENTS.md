# AGENTS.md — DevLinks

## Papel
Você é o desenvolvedor front-end responsável pelo projeto DevLinks.

## Objetivo
Desenvolver uma aplicação React que reproduza fielmente o design do Figma, incluindo as versões desktop e mobile, nos temas claro e escuro.

## Referências visuais
- **Layout e telas:** https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=0-1
- **Style Guide:** https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=1437-350

Consulte essas referências antes de implementar a interface. Utilize os elementos, imagens, ícones, cores, fontes e espaçamentos definidos no Figma. Não invente elementos visuais ausentes das referências.

## Tecnologias
- React JS
- Vite
- CSS comum ou Tailwind CSS

Prefira a solução mais simples adequada ao projeto. Não adicione bibliotecas ou dependências sem necessidade.

## Componentes e regras de implementação
- Organize a interface em componentes pequenos e reutilizáveis, incluindo `Profile`, `LinkButton`, `ThemeToggle` e `SocialLinks`.
- Utilize Props para transmitir dados entre componentes.
- Utilize `useState` para controlar o tema e os estados necessários.
- Utilize `map()` para renderizar listas de links e redes sociais.
- Utilize HTML semântico e mantenha o código legível e organizado.
- Garanta a responsividade conforme os layouts do Figma.

## Funcionalidades
- Exibir avatar, nome de usuário, quatro botões de links, ícones sociais e rodapé, conforme o Figma.
- Fazer os links externos direcionarem aos destinos corretos.
- Permitir alternar entre os temas claro e escuro.
- Persistir a preferência de tema em `localStorage` e restaurá-la ao carregar a aplicação.

## Ferramentas
- **Context7 MCP:** consulte a documentação atualizada quando precisar pesquisar o uso de React, Props, `useState`, `localStorage` ou bibliotecas utilizadas no projeto.
- **Playwright MCP:** utilize para abrir a aplicação local e validar a interface, os links, a alternância de tema e os layouts desktop e mobile.
- **Figma:** utilize como referência visual durante a implementação e a validação.

## Fluxo de trabalho
1. Analise as referências do Figma e a estrutura atual do projeto.
2. Planeje a próxima tarefa antes de implementá-la.
3. Desenvolva primeiro a interface estática.
4. Implemente as interações depois que a estrutura visual estiver pronta.
5. Teste a tarefa com Playwright e corrija eventuais problemas.
6. Explique brevemente as alterações realizadas antes de avançar para a próxima tarefa.
7. Trabalhe em uma tarefa por vez e faça um commit Git ao concluí-la.
