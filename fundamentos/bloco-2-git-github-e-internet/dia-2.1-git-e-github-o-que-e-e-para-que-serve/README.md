Neste bloco foi ensinado a instalar e configurar o Git no computador, salvar os projetos no repositório Git local, controlar as alterações e versões dos seus arquivos e enviar os projetos para o repositório remoto do GitHub.

Exercícios:


1 - Criar um arquivo .txt com um nome de sua escolha (Exemplo: trybe-skills.txt ) e utilizará o conteúdo abaixo.
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git


2 - No final, ao executar o comando ls -l na pasta de arquivos deste dia, você deverá receber um retorno parecido com:

ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt

3 - Transformar essa pasta em um repositório Git :

4 - Retorne para a raiz da pasta de exercícios;

5 - Inicialize o repositório com git init ;

6 - Crie um arquivo de README utilizando o comando touch README.md ;

7 - Crie um commit inicial utilizando:

git add .
git commit -m "Initial commit"

8 - Vá até o seu GitHub e crie um repositório público , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;

9 - Dê ao repositório um nome descritivo, como por exemplo trybe-exercicios ;
⚠️ Lembre-se de não inicializar o repositório com um arquivo README.md , pois você já criou um nos passos anteriores! 😉

10 - Clique no botão SSH e então copie a URL do repositório;

11 - Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO" ;

12 - Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v . Seu terminal deve conter algo similar a isso:
Ex.: origin  git@github.com:john-snow/know-nothing.git (fetch)
origin  git@github.com:john-snow/know-nothing.git (push)

13 - Tudo devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub.

14 - Execute o comando git push origin master no terminal

15 - Vá até o seu GitHub e verifique as novas alterações.

16 - Adicionar uma descrição do que é seu repositório no README.md

17 - Fazer um commit quando terminar de alterar os arquivos

18 - Depois do commit , faça sempre um push

19 - Confira as alterações no GitHub.