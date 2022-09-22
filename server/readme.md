# HTTP Methods / API RESTful / HTTP Codes

## GET
## POST
## PUT - Quando se esta editando uma entidade praticamente por completo
## PATH - Editar uma informacao especifica dentro de uma entidade 
## DELETE

----------------------------------------------------------------

# Tipos de parametros 

## Querry: sao utilizados quando precisamos persistir estados, ou seja o estado atual que pagina se encontra no momento. Exemplo quando estamos na pagina 35 e queremos aplicar um filtro de busca, apos aplicar permanecer na pagina 35 e nao voltar para a pagina 1. Filtros, ordenacao, paginacao e para coisas que nao sao sensiveis, pois ficam disponiveis na URL. Os querry params sao nomeados.
    localhost:3333/ads?page=2&sort=title

## Route: Tambem sao parametros da URL mas nao sao nomeados, usado geralmente como identificador de um recurso
    localhost:3333/ads/5
    localhost:3333/post/como-criar-uma-api-rest

## Body: Enviar varias informacoes numa unica requisicao, como um envio de formulario (nome, email, avatar, ...), nao e mostrado na URL, por isso e o mais recomendado para dados sensiveis 

----------------------------------------------------------------

