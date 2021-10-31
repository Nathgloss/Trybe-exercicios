Neste bloco foi ensinado:
Copiar um repositório já existente no GitHub para o meu computador;
Abrir Pull Requests ;
Trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída.

Exercícios:

⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo .txt , localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.

1 - Navegue até a raiz do projeto com o arquivo .txt;

2 - Verifique se não existe nada sem "commitar" utilizando git status :
Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.

3 - Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;

4 - No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
Exemplo:
Copiar
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- HTML
- CSS

5 - Faça um git add nome-do-arquivo.extensao ;
Você pode adicionar todos os arquivos que você modificou usando git add . , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;

6 - Agora um git commit -m "Mensagem que você gostaria" ;


7 - E por último um git push -u origin trybe-skills-changes ;

8 - Abra um Pull Request com uma descrição detalhada:
Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..." ;
9 - O merge deve ser feito apenas quando chegar no exercício 10.
10 - Retorne para a branch principal, master , com o comando: git checkout master ;

11 - Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);

12 - Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;

13 - No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;


14 - Faça um git add nome-do-arquivo.extensao ;

15 - Agora um git commit -m "Mensagem que você gostaria" ;
e por último um git push -u origin trybe-skills-updates ;

16 - Após o primeiro "push" da sua branch, você pode usar apenas o comando git push ;

17 - Abra um Pull Request com uma descrição amigável:

18 - Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request :

19 - Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto 
20 - Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" ;
21 - Agora você deve conseguir "mergear" seu Pull Request normalmente. 
