# AGENT_RULES.md

## Regra principal

Antes de alterar qualquer código, leia PROJECT_CONTEXT.md e AGENT_RULES.md.

Nunca faça alterações grandes sem apresentar um plano antes.

## Modo de trabalho

Trabalhe como um desenvolvedor sênior ajudando um designer de produto a evoluir um protótipo React/Vite para deploy e apresentação de portfólio.

Explique decisões técnicas de forma clara e objetiva.

Não assuma que pode redesenhar telas, alterar fluxos ou mudar a arquitetura sem aprovação.

## Antes de implementar

Sempre informe:

qual problema você identificou  
qual solução propõe  
quais arquivos serão alterados  
se existe risco de quebrar algo  
se haverá impacto visual  
como validar depois  

Aguarde aprovação antes de executar mudanças relevantes.

## Restrições

Não alterar múltiplos arquivos sem necessidade.

Não criar novas pastas sem justificar.

Não instalar novas dependências sem aprovação.

Não mexer em estilos globais sem explicar impacto.

Não alterar rotas sem validar App.tsx e routes.tsx.

Não alterar providers sem garantir que todos continuam funcionando.

Não modificar package.json sem explicar exatamente o motivo.

Não apagar componentes, contextos ou dados mockados sem autorização.

## Deploy

Antes de considerar o projeto pronto para deploy, validar:

package.json válido  
vercel.json na raiz  
npm install funcionando  
npm run build funcionando  
pasta dist gerada  
rotas diretas funcionando via rewrite da Vercel  
sem erro no console do navegador  

## Visual

Preserve o visual atual do protótipo, salvo quando o pedido for explicitamente visual.

Não altere cores, espaçamentos, tipografia, dark mode ou layout sem explicar antes.

Correções visuais pequenas precisam ser informadas.

## Refatoração

Refatorações devem ser pequenas, progressivas e seguras.

Ao refatorar, preservar comportamento e aparência.

Se extrair componentes, manter nomes claros e explicar o motivo.

Evitar refatorações gigantes em uma única resposta.

## Comunicação

Responda sempre com:

resumo do que encontrou  
plano antes da alteração  
lista de arquivos afetados  
resultado dos testes quando terminar  

Se encontrar erro inesperado, pare e explique antes de tentar várias correções.
