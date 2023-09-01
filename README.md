# avaliacao-final-UC4

  - Projeto feito para concluir as atividades feitas durante o curso de Técnico de Informática para a Internet com o professor Renan Ponick.

# Páginas
  - Home - Página de início que fala sobre o objetivo e as *features* do site;
  - Hospedagem - Entenda sobre hospedagem, e seus dados técnicos, além de como fazer para hospedar um site;
  - Git e Github - Informações sobre os softwares e como configurar chaves SSH/clonar repositórios;
  - Github Pages - Dados sobre como usar a ferramenta para hospedação de sites estáticos e dinâmicos
  - Portfolio - Currículo pessoal com minhas competências e dados profissionais;

# Anotações feitas em aula
  - Abaixo, estão todas as anotações usadas como base para o desenvolvimento do projeto, lembrando que nem tudo presente na versão final do site está aqui:

# Incializando git local

- Abra o bash, e insira a linha de código `git --version `  para ver se o git está na versão correta; 

- Agora configure seu usuário com os comandos:
    `bash
    git config --global user.name "Seu nome"
    git config --global user.email "Seu email"
    git config --global core.editor "Nome da sua IDE" (opcional)
    `
- Para criar o repositório localmente, use o `mkdir nome_da_pasta` para criar a pasta usada para inicializar o repositório;

- Entre na nova pasta com o comando `cd nome_da_pasta`;

- Use o comando `git init` para inicializar o repositório;

- Por fim, use a linha `code .` para abrir essa pasta pelo seu editor de código.

# Comandos essenciais do git
```bash
- git status
# Indica em que branch você está
# Os arquivos modificados/adicionados/deletados
# Se alguma coisa precisa ser adicionada ao projeto

- git add <filename ou . >
# Adiciona arquivos novos da pasta para o repositório;
 
- git restore --staged <filename ou . >
# Usado para reverter o git add;

- git branch < branchname >
# Cria um branch novo;

- git checkout < branchname >
# Entra no branch escolhido;

- git checkout -b < branchname >
# Cria um novo branch e entra nele;

- git commit -m < description >
# Cria uma versão do código, como um "save em um jogo" no repositório local, junto com uma descrição;

- git push
# Envia as novas alterações/commits do repositório local para o repositório local;

- git branch -D < branchname >
# Deleta um branch escolhido;

- git fetch
# Puxa as novas alterações/commits enviados ao repositório remoto para seu repositório local mas não altera seu código;

- git pull
# Puxa as novas alterações/commits enviados ao repositório remoto para seu repositório local E altera seu código para a versão mais recente puxada pelo comando;
```

# Cadastrando a chave SSH de um dispositivo no GitHub

- Abra seu *Git Bash* e verifique se já há uma chave SSH com o comando `ls -al ~/.ssh`;

- Se não houver uma, crie com o comando `ssh-keygen -t ed25519 -C "email@example.com"` (O código bizarro é padrão do GitHub);

- Inicialize um agente (robozinho de SSH) com o comando `eval "$(ssh-agent -s)"`;

- Dê a chave SSH ao robozinho com a linha de código `ssh-add ~/.ssh/id_ed25519` ;

- Agora, utilize o comando clip para copiar para a área de transferência, sua chave SSH: `clip < ~/.ssh/id_ed25519.pub`;

- Com a chave em mãos, logue sua conta no GitHub e abra as *settings* > *SSH and GPG keys*;

- Clique no botão de adicionar uma chave SSH, dê um nome a essa chave (ex: casa, trabalho...) para identificação. Em seguida, cole o código previamente copiado na caixa de texto grande.

- Por fim, use `ssh -T git@github.com` no bash para conectar tudo e digite yes para confirmar a conexão, está feito!

# Empurrando um repositório local para o GitHub

- Com o arquivo pronto (com as informações que você quer), abra o terminal com ctrl + " (ou ctrl + shift + " para criar um novo terminal), **Certifique-se que o caminho do terminal termina na pasta dos seus arquivos**;

- Escreva no terminal `git init` para inicializar um repositório **Público** na sua máquina;

- Digite `git add .` para salvar arquivos novos e/ou alterações no repositório local;

- Em seguida, dê o clássico *commit* com o comando `git commit -m "Descrição do commit"` para salvar essa versão do código no repositório local;

- Por fim, no menu "Source Control" no VSC, clique no botão para enviar o repositório local para o remoto;

- Em seguida, fique no troca troca de requisições de login entre o VSC e o GitHub, e por fim, escolha se o repositório será privado ou público;

- Para enviar futuras mudanças no projeto, utilize o comando `git push`.

# Dando deploy automático com o GitHub Pages

- A princípio, crie seu projeto (criei o meu em react, com o comando `npx create react-app nomedoprojeto`)

- após isso, dentro da pasta raíz, crie a seguinte sequência de arquivos: `.github/workflows/build.yml`

- Coloque esse código aqui: 

```yml 
name: deploy 
on:
  push:
    branches: 
      - main ###IMPORTANTE: Isso diz que o código será rodado uando houverem pushes na main (preferivelmente coloque mais branches, nunca dê push na main)
jobs: #tarefas a fazer
  deploy:
    runs-on: ubuntu-20.04 #OS do servidor que o Pages vai hospedar
    steps: #indica as tecnologias a serem usadas
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with: #indica qual versão do node usar
          node-version: '18.x' #18.0 pra cima
      - name: Build web-app
        run: |
          npm ci 
          npm run build 
        #faz a build do projeto
      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

- Com o código feito, acesse no seu repositório: `settings>actions>general` e, ao fim da página:
    - marque a checkbox `Allow GitHub Actions to create and approve pull requests`
    - Marque o radio (checkbox redonda) `Read and write permissions`
    
- Clique em save

- Agora, acesse no seu repositório o menu actions e veja se o deploy foi bem sucedido

- Agora, vá em `settings>pages` e:
    - Escolha para dar deploy via branch
    - Mude o branch para `gh-pages` (que o bot criou automaticamente com o build.yml)
    - Espere um menu no topo da página que leve você ao seu site, agora com deploys automáticos!

# Espero que goste, boas codificações!
