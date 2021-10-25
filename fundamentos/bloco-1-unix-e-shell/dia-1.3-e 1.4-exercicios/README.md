Dia 1.3
Exercícios
Parte I - Criação de arquivos e diretórios
Dica: Para criação de arquivos vazios você pode usar o comando touch nome-do-arquivo.extensao.

Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_testse navegue até ele.

Crie um arquivo de texto com o nome trybe.txt.

Crie uma cópia do arquivo trybe.txtcom nome trybe_backup.txt.

Renomeie o arquivo trybe.txt.

Dentro de unix_tests, crie um novo diretório chamado backup.

Mova o arquivo trybe_backup.txtpara o diretório backup.

Dentro de unix_tests, crie um novo diretório chamado backup2.

Mova o arquivo trybe_backup.txtda pasta backuppara macarrão backup2.

Apague um macarrão backup.

Renomeie a pasta backup2para backup.

Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

Apague o diretório backup.

Limpe o terminal.

Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo chamado skills.txt:

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
Mostre na tela como as 5 primeiras habilidades do arquivo skills.txt.

Mostre na tela como as 4 últimas skills do arquivo skills.txt.

Apague todos os arquivos que os terminem .txt.

Parte II - Manipulação & Busca
Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
Mostre todo o conteúdo do arquivo countries.txtna tela.

Mostre o conteúdo de countries.txt, página por página, encontra a Zambia.

Mostre novamente o conteúdo da countries.txtpágina por página, mas agora utilize um comando para buscar por Zambia.

Busque por Brazilno countries.txt.

Busque novamente por brazil, mas agora utilizando minúsculas.

Para os próximos exercícios, crie um novo chamado phrases.txte algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.

Busque pelas frases que não contenham a palavra fox.

Conte o número de palavras do arquivo phrases.txt.

Conte o número de linhas do arquivo phrases.txt.

Crie os arquivos empty.tbte empty.pdf.

Lista todos os arquivos do diretório unix_tests.

Lista todos os arquivos que terminem com txt.

Lista todos os arquivos que terminem com tbtou txt.

Acesse o manual de comando ls.

Dia 1.4 
Exercícios
Parte I - Comandos de Input e Output
Navegue até uma massa unix_tests;

Crie um arquivo texto pelo terminal com o nome skills2.txte responsabilidade os valores Internet, Unixe Bash, um em cada linha.

Português mais 5 itens à sua lista de habilidades e depois imprima a lista ordenada no terminal.nerd_face

Conte linhas linhas tem o arquivo skills2.txt.

Crie um arquivo chamado top_skills.txtusando o skills2.txt, contendo as 3 primeiras habilidades em ordem alfabética.

Crie um novo arquivo chamado phrases2.txtpelo terminal e algumas frases de suas escolha.

Conte o número de linhas que definido como letras br.

Conte o número de linhas que não classificado como letras br.

Local dois nomes de países ao final do arquivo phrases2.txt.

Crie um novo arquivo chamado bunch_of_things.txtcom os conteúdos dos arquivos phrases2.txtecountries.txt

Ordene o arquivo bunch_of_things.txt.

Parte II - Permissões
Navegue até uma massa unix_tests;

Rode o comando ls -le veja quais são os determinantes dos arquivos;

Mude a permissão do arquivo bunch_of_things.txtpara que todos os usuários possam ter acesso à leitura e escrita, e se está correto com o comando ls -l;

Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

Tire a permissão de escrita do arquivo bunch_of_things.txtpara todos os usuários, se está correto com o comando ls -l;
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

Volte à permissão do arquivo bunch_of_things.txtpara uma listaada utilizando o comandochmod 644 bunch_of_things.txt.
Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

Parte III - Processos e Trabalhos
Lista de todos os processos;

Agora use o comando sleep 30 &;

Use uma listagem de processos para encontrar o PID do processo que está fazendo o comando sleep 30e termine uma execução (mate o processo);

Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue fazendo em background;

Crie um processo em fundo que rode o comando sleeppor 300 segundos.

Crie mais dois processos que rodem o comando sleeppor 200 e 100 segundos, respectivamente.

Você deve criá-los em primeiro plano (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

Verifique se apenas o processo sleep 300está em execução com o comando jobs. Suspenda uma execução desse processo.
Você vai trazer trazer o processo para primeiro plano ( fg) e suspendê-lo ( ctrl+z), ou enviar um sinal).

Retome a execução do processo sleep 100em background com o comando bg.

Concluir uma execução de todos os processos sleep(mate os processos)

(Bônus) - Parte IV - Terminal O despertar do
E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do UNIX? aponte para cimaconfetti_ball

Abra o terminal e execute o comando sudo apt-get install cmatrixe, depois, execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+cpara voltar ao terminal;

Executar o comando sudo apt-get install fortune, após a instalação, crie um arquivo de texto chamado fortune.txtque contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >;

Conte muitas palavras tem uma frase da sua sorte do dia. Dica: use o comando wc;

Executar o comando sudo apt-get install sl, após a instalação, executar o comando sl. Agora tente sl -F;

Execute o comando sudo apt-get install cowsay, após a instalação, execute o comando cowsaye algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt;

Descubra os fatores principais usando o comando factore em seguida o número 42;

Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev.

Executar o comando telnet towel.blinkenlights.nle espere alguns segundos. Lembre-se de que você tem mais exercícios para fazer!sweat_smile
