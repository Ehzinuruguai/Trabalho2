const caixaPrincipal= document.querySelector(".caixa-principal")
const caixaPerguntas= document.querySelector(".caixa-perguntas")
const caixaALternativas= document.querySelector(".caixa-alternativas")
const caixaResultado= document.querySelector(".caixa-resultado")
textoResultado= document.querySelector(".texto-texto")

const perguntas = [

    {
        enunciado: "Assim que saiu da escola você percebe que suas escolhas podem ajudar a construir o futuro do Brasil. Pensando nisso, qual é o primeiro pensamento?",

        alternativas: [

            {
                texto: "Quero ajudar a transformar o Brasil!",

                afirmacao: "Começou a pensar em maneiras de contribuir para melhorar o futuro do país."
            },

            {
                texto: "Não sei se minhas escolhas fazem diferença.",

                afirmacao: "Percebeu que pequenas atitudes também podem contribuir para transformar a sociedade."
            }

        ]

    },

    {

        enunciado: "Com essa ideia em mente, sua professora decidiu fazer uma atividade sobre os principais desafios do Brasil. Ela pede que você escolha uma área para ajudar a transformar. Qual atitude você toma?",

        alternativas: [

            {

                texto: "Escolhe a educação, buscando ideias para melhorar o aprendizado e aumentar as oportunidades.",

                afirmacao: "Percebeu que investir em educação pode abrir novas oportunidades para muitas pessoas."
            },

            {

                texto: "Escolhe a tecnologia, buscando soluções que possam facilitar a vida das pessoas.",

                afirmacao: "Começou a imaginar como novas tecnologias poderiam ajudar diferentes comunidades brasileiras."
            }

        ]

    },

    {

        enunciado: "Depois da atividade, a professora propôs um debate sobre o futuro do Brasil. A turma discutiu meio ambiente, economia, educação e tecnologia. Nesse debate, como você se posiciona?",

        alternativas: [

            {

                texto: "Defende que o desenvolvimento do Brasil deve acontecer junto com a preservação do meio ambiente.",

                afirmacao: "Passou a pesquisar maneiras de incentivar desenvolvimento econômico sem abandonar a responsabilidade ambiental."
            },

            {

                texto: "Defende que criar oportunidades de trabalho e melhorar a qualidade de vida deve ser prioridade.",

                afirmacao: "Começou a pensar em projetos capazes de criar oportunidades e melhorar a vida das comunidades."
            }

        ]

    },

    {

        enunciado: "Ao final da discussão, você precisa criar uma campanha que represente sua visão sobre o futuro do Brasil. E agora?",

        alternativas: [

            {

                texto: "Criar uma campanha mostrando como a educação pode transformar diferentes regiões do Brasil.",

                afirmacao: "Percebeu que compartilhar conhecimento pode inspirar outras pessoas a participarem das mudanças."
            },

            {

                texto: "Criar uma campanha mostrando como tecnologia e inovação podem transformar o país.",

                afirmacao: "Começou a incentivar outras pessoas a conhecerem novas tecnologias e criarem soluções para problemas."
            }

        ]

    },

    {

        enunciado: "Você participa de um projeto escolar onde precisa escolher uma atitude para ajudar a construir um Brasil melhor. Qual decisão você toma?",

        alternativas: [

            {

                texto: "Acredita que cada pessoa deve cuidar apenas das próprias escolhas e deixar as mudanças para outras pessoas.",

                afirmacao: "Percebeu que suas atitudes também fazem parte da construção do futuro e começou a participar mais."
            },

            {

                texto: "Acredita que cada pessoa pode contribuir e que mudanças acontecem quando a sociedade participa.",

                afirmacao: "Entendeu que construir o futuro do Brasil depende de participação, responsabilidade e colaboração entre pessoas."
            }

        ]

    },

];
```
