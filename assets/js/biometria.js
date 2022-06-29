// Perguntas frequentes - Biometria
var x;
var i = 1;
var perguntas = {



	pergunta_1: {
		sigla: 'pergunta_1',
		titulo: '1. Como funciona a biometria/o cadastro biométrico?',
		resposta: '<p>Na biometria – ou cadastro biométrico –, a Justiça Eleitoral faz a coleta e a inclusão de sua impressão digital, sua assinatura e sua foto, pra serem usados na votação e impedir que outras pessoas votem por você.</p><p>Pra fazer o cadastro, vá a um cartório eleitoral com documento de identificação oficial (com foto), comprovante de residência atual e o título de eleitor (se tiver).</p><p>Mas atenção! Tem cartórios que só atendem com agendamento prévio. Se tiver dúvidas, é só pedir informação pro TRE da sua região, consulte a lista de TREs pelo link: (<a href="http://goo.gl/M9HqNu" target="_blank">http://goo.gl/M9HqNu</a>).</p>'+
				'<span class="tags">Tags: Funcionamento biometria, como é feita, como é realizada, registro biométrico.</span>'
	},

	pergunta_2: {
		sigla: 'pergunta_2',
		titulo: '2. Documentos para fazer a biometria ou cadastro biométrico.',
		resposta: '<p>Os documentos que você deve levar ao cartório eleitoral para fazer o seu cadastro biométrico são:</p>'+
		'<p>1) documento oficial brasileiro de identificação com foto*;<br>2) comprovante de residência recente, emitido há menos de 3 meses;<br>3) o título de eleitor(se o tiver); e,<br>4) para homens com mais de 18 anos(até o dia 31 de dezembro do ano em que completarem 45 anos) que solicitarem pela primeira vez título de eleitor é necessário levar também um documento que comprove a quitação junto à Justiça Militar.</p>'
			+ '<p>* Podem ser utilizados: carteira de identidade, carteira de categoria profissional reconhecida por lei, certificado de reservista, passaporte ou carteira nacional de habilitação. No caso de solicitação de título pela primeira vez, NÃO SÃO ACEITOS carteira nacional de habilitação, passaporte, nem carteira de trabalho digital."</p>'
			+ '<p>Atenção! A carteira de trabalho digital não é documento válido de identificação na Justiça Eleitoral.</p>'
			+ '<p>Fique atento! Títulos cancelados há mais de 6 anos são excluídos do sistema. Assim, novo título será emitido, como se fosse a primeira vez, ou seja, serão exigidos os mesmos documentos que para a emissão do primeiro título, além do pagamento de multa, conforme o caso.</p>'
			+ '<span class="tags">Tags: Papéis, comprovantes, declaração.</span>'
	},

	pergunta_3: {
		sigla: 'pergunta_3',
		titulo: '3. Cancelamento de título de eleitor por não fazer a biometria.',
		resposta: '<p>Primeiramente, esclarecemos que no momento a coleta biométrica está suspensa em virtude da pandemia do novo coronavírus.</p><p>Se o cadastramento biométrico for obrigatório em seu município e você perder o prazo, seu título poderá ser cancelado.</p><p>Possíveis consequências do cancelamento do título eleitoral são:</p><p><ol type="I"><li>impossibilidade de emissão de passaporte;</li><li>impossibilidade de emissão de carteira de identidade;</li><li>suspensão de recebimento de salários de função ou suspensão de emprego público;</li><li>impossibilidade de obtenção de certos tipos de empréstimos;</li><li>impossibilidade de participação em concursos públicos, entre outros.</li></ol></p><p>Para conhecer outras consequências do cancelamento do título eleitoral (as mesmas de ausência não justificada às eleições), consulte: <a href="https://www.tse.jus.br/eleitor/justificativa-eleitoral/consequencias-para-quem-nao-justificar" target="_blank">https://www.tse.jus.br/eleitor/justificativa-eleitoral/consequencias-para-quem-nao-justificar</a>.</p>'+
		'<span class="tags">Tags: Suspensão de título, perda de título, penalidades.</span>'
	},
	pergunta_4: {
		sigla: 'pergunta_4',
		titulo: '4. Minha cidade está passando pela biometria obrigatória? Se sim, sou obrigado a fazer a biometria na minha cidade?',
		resposta: '<p>Primeiramente, esclarecemos que no momento a coleta biométrica está suspensa em virtude da pandemia do novo coronavírus.</p><p>Para saber sobre a situação do cadastramento biométrico em cada município, consulte o mapa acima. As unidades federativas indicadas em verde já passaram por revisão biométrica. Naquelas em amarelo, ainda há municípios que não realizaram o cadastramento biométrico obrigatório. Se sua unidade federativa está amarela no mapa, clique sobre ela para saber a situação do município em que vota.</p><p>Pode ser que você precise de um glossário para entender a situação do seu município. Vamos ajudá-lo:</p><p><u>Município com cadastramento biométrico ordinário</u> - o comparecimento ao cartório eleitoral não é obrigatório, mas, quando o atendimento presencial retornar, o serviço poderá estar disponível, conforme as regras sanitárias a serem estabelecidas pela Justiça Eleitoral.</p><p><u>Município em revisão</u> - quando as revisões biométricas forem retomadas, o eleitorado de municípios em revisão deverá obrigatoriamente comparecer ao seu cartório eleitoral, no prazo indicado, para realizar o cadastramento biométrico.</p><p>Se você realizou o cadastramento biométrico fora do período obrigatório, deve ficar atento quando tiver início a convocação oficial. Se o cadastramento estiver ocorrendo com uma revisão de eleitorado, será necessário comparecer ao cartório novamente. Dessa forma, a melhor opção é entrar em contato com o cartório eleitoral para confirmar a informação.</p><p><u>Município revisado</u> - o município já concluiu o cadastramento biométrico de seu eleitorado.</p><p><u>Município sem biometria</u> - o cadastramento biométrico obrigatório ainda não foi iniciado.</p>'+
		'<span class="tags">Tags: Sou forçado a fazer a biometria, tenho que fazer a biometria.</span>'
	},
	pergunta_5: {
		sigla: 'pergunta_5',
		titulo: '5. O que acontece se eu não fizer a biometria?',
		resposta: '<p>Se o cadastramento biométrico for obrigatório em seu município e você perder o prazo de fazê-lo, seu título poderá ser cancelado.</p><p>Possíveis consequências do cancelamento do título eleitoral são:</p><ol type="I"><li>impossibilidade de emissão de passaporte;</li><li>impossibilidade de emissão de carteira de identidade;</li><li>suspensão de recebimento de salários de função ou suspensão de emprego público;</li><li>impossibilidade de obtenção de certos tipos de empréstimos;</li><li>impossibilidade de participação em concursos públicos, entre outros.</li><p>Para conhecer outras consequências do cancelamento do título eleitoral (as mesmas de ausência não justificada às eleições), consulte: <a href="https://www.tse.jus.br/eleitor/justificativa-eleitoral/consequencias-para-quem-nao-justificar" target="_blank">https://www.tse.jus.br/eleitor/justificativa-eleitoral/consequencias-para-quem-nao-justificar</a>.</p></ol>'+
		'<span class="tags">Tags: O que ocorre se eu não fizer a biometria, o que sucede se eu não fizer a biometria, problemas se eu não fizer a biometria.</span>'
	},
	pergunta_6: {
		sigla: 'pergunta_6',
		titulo: '6. Quanto custa fazer a biometria?',
		resposta: '<p>Os serviços eleitorais são gratuitos.</p>'+
		'<span class="tags">Tags: Custo da biometria, preço da biometria, orçamento biometria, gastos com a biometria, despesa com a biometria, valor da biometria.</span>'
	},
	pergunta_7: {
		sigla: 'pergunta_7',
		titulo: '7. Preciso refazer a biometria?',
		resposta: '<p>Se você já fez o cadastro biométrico, não precisa fazê-lo novamente. Fique tranquilo!</p><p>O título de eleitor de quem fez a biometria tem impresso, no canto superior direito do documento, o termo “Identificação Biométrica”. Portanto, se você já fez a biometria, não há necessidade de refazer.</p>'+
		'<span class="tags">Tags: Preciso fazer de novo a biometria, preciso repetir a biometria, preciso renovar a biometria.</span>'
	},
	pergunta_8: {
		sigla: 'pergunta_8',
		titulo: '8. Por que a biometria é obrigatória?',
		resposta: '<p>A biometria é obrigatória para melhor identificar a eleitora ou o eleitor e para garantir a segurança e transparência do processo eleitoral. A coleta biométrica é realizada apenas em atendimentos presenciais, que, no momento, estão suspensos em todo o país.</p><p>Quando a revisão biométrica for obrigatória no município em que você vota, compareça ao seu cartório eleitoral no prazo indicado ou seu título eleitoral poderá ser cancelado. Se você já morar em outro município, poderá comparecer ao cartório eleitoral do seu novo endereço e solicitar a transferência. Assim, você evita o cancelamento do seu título.</p><p>Lembramos que possíveis consequências do cancelamento do título eleitoral são:</p><ol type="I"><li>impossibilidade de emissão de passaporte;</li><li>impossibilidade de emissão de carteira de identidade;</li><li>suspensão de recebimento de salários de função ou suspensão de emprego público;</li><li>impossibilidade de obtenção de certos tipos de empréstimos;</li><li>impossibilidade de participação em concursos públicos, entre outros.</li></ol><p>Para conhecer outras consequências do cancelamento do título eleitoral (as mesmas de ausência não justificada às eleições), consulte: <a href="https://www.tse.jus.br/eleitor/justificativa-eleitoral/consequencias-para-quem-nao-justificar" target="_blank">https://www.tse.jus.br/eleitor/justificativa-eleitoral/consequencias-para-quem-nao-justificar</a>.</p><p>Para saber se você já fez o cadastramento biométrico, consulte: <a href="https://www.tse.jus.br/eleitor/titulo-e-local-de-votacao/copy_of_consulta-por-nome" target="_blank">https://www.tse.jus.br/eleitor/titulo-e-local-de-votacao/copy_of_consulta-por-nome</a>.</p><p>Se você realizou o cadastramento biométrico fora do período obrigatório, deve ficar atento quando tiver início a convocação oficial. Se o cadastramento estiver ocorrendo com uma revisão de eleitorado, será necessário comparecer ao cartório novamente. Dessa forma, a melhor opção é entrar em contato com o cartório eleitoral para confirmar a informação.</p>'+
		'<span class="tags">Tags: Por que a biometria é imposta, por que a biometria é exigida, por que a biometria é indispensável, por que a biometria é necessária, por que a biometria é fundamental.</span>'

	},
	pergunta_9: {
		sigla: 'pergunta_9',
		titulo: '9. O que é revisão biométrica?',
		resposta: '<p>A revisão biométrica é a atualização dos dados do cadastro eleitoral por meio de coleta de fotografia e impressão digital a ser realizada, gradativamente, em todos os municípios brasileiros. A maioria dos municípios já passou por revisão biométrica.</p><p>Esclarecemos que no momento a coleta biométrica está suspensa em virtude da pandemia do novo coronavírus.</p><p>Ao iniciar o cadastramento biométrico obrigatório, o tribunal de seu estado fará ampla divulgação. Quando o cadastramento for obrigatório no município em que você vota, compareça ao seu cartório eleitoral no prazo indicado ou seu título eleitoral poderá ser cancelado. Se você já morar em outro município, poderá comparecer ao cartório eleitoral do seu novo endereço e solicitar a transferência. Assim, você evita o cancelamento do seu título.</p><p>Para saber sobre o cadastramento biométrico do eleitorado em cada estado, consulte: <a href="https://www.tse.jus.br/eleitor/biometria/biometria-atual-uf" target="_blank">https://www.tse.jus.br/eleitor/biometria/biometria-atual-uf</a>.</p>'+
		'<span class="tags">Tags: O que é correção biométrica, o que é retificação biométrica, o que é verificação biométrica, o que é atualização biométrica.</span>'
	},
	pergunta_10: {
		sigla: 'pergunta_10',
		titulo: '10. Sou eleitor de uma cidade. Posso fazer a biometria em outra?',
		resposta: '<p>Não. Você só pode fazer a biometria na cidade onde tem seu domicílio eleitoral (no município onde reside, como regra). Assim, não adianta querer fazer a biometria numa cidade por onde está de passagem, ainda que esteja com disponibilidade de tempo.</p><p>No caso de eleitores de cidades menores, é importante saber em qual cidade fica a sede da zona eleitoral que cuida do município onde vota.</p>'+
		'<span class="tags">Tags: Fazer a biometria em outra cidade, fazer a biometria em outro estado, fazer a biometria em outra região, fazer a biometria em outro lugar.</span>'
	},
	pergunta_11: {
		sigla: 'pergunta_11',
		titulo: '11. Estou fora do Brasil ou moro no exterior. Preciso realizar o cadastramento biométrico?',
		resposta: '<p>Quando você se muda para o exterior, você deve comparecer ao consulado do Brasil no país em que residir para fazer a transferência do título para a Zona Eleitoral do Exterior, ZZ. Assim, você não corre o risco de ter seu título cancelado quando o município em que você morava passar por cadastramento biométrico.</p>'+
		'<span class="tags">Tags: Preciso fazer o cadastro biométrico, preciso efetuar o cadastro, preciso verificar o cadastro.</span>'
	},
	pergunta_12: {
		sigla: 'pergunta_12',
		titulo: '12. A biometria agiliza a votação?',
		resposta: '<p>O objetivo da biometria não é tornar o processo de votação mais rápido do que já é. A principal vantagem do sistema biométrico é aumentar a segurança na identificação do eleitor, impedindo que um eleitor vote no lugar de outro.</p>'+
		'<span class="tags">Tags: Acelera a votação, adianta a votação, apressa a votação.</span>'
	},
	pergunta_13: {
		sigla: 'pergunta_13',
		titulo: '13. Se a digital não pegar, como faço para realizar a biometria?',
		resposta: '<p>Capturar a digital de muitas pessoas – de todas as idades e por diversos fatores – pode ser difícil. Ainda assim, todos devem fazer a biometria, procedimento que também inclui foto, assinatura e completa a atualização de dados. Quando chegar o dia da eleição, não há nenhum problema caso a digital não possa ser lida. Após três tentativas, o eleitor será orientado a apresentar documento oficial brasileiro de identificação com foto* e o mesário poderá fazer algumas perguntas para a confirmação da identidade. Então, o eleitor poderá votar normalmente.</p><p>* Podem ser utilizados na seção eleitoral: carteira de identidade, carteira de categoria profissional reconhecida por lei, certificado de reservista, carteira nacional de habilitação e passaporte. Atenção! A carteira de trabalho digital não é documento válido de identificação na Justiça Eleitoral.</p>'+
		'<span class="tags">Tags: Digital não pegar, digital não aparecer, digital não funcionar, digital der erro.</span>'
	},
	pergunta_14: {
		sigla: 'pergunta_14',
		titulo: '14. Posso votar sem ter feito a biometria?',
		resposta: '<p>Sim. A necessidade de identificação biométrica foi suspensa para as eleições de 2020 a fim de evitar aglomerações e reduzir os riscos de contaminação pelo novo coronavírus.</p>'+
		'<span class="tags">Tags: Posso votar sem fazer a biometria, posso votar sem biometria.</span>'
	},
	pergunta_15: {
		sigla: 'pergunta_15',
		titulo: '15. E se, na hora de votar, a digital não for reconhecida?',
		resposta: '<p>Após três tentativas de reconhecimento do eleitor pelas digitais, o eleitor será orientado a apresentar documento oficial brasileiro de identificação com foto* e o mesário poderá fazer algumas perguntas para a confirmação da identidade. Então, o eleitor poderá votar normalmente.</p><p>* Podem ser utilizados na seção eleitoral: carteira de identidade, carteira de categoria profissional reconhecida por lei, certificado de reservista, carteira nacional de habilitação e passaporte. Atenção! A carteira de trabalho digital não é documento válido de identificação na Justiça Eleitoral.</p>'+
		'<span class="tags">Tags: Se a digital não funcionar, se a digital não aparecer, se a digital der erro, se a digital der problema.</span>'
	},
	pergunta_16: {
		sigla: 'pergunta_16',
		titulo: '16. Como começou a biometria na Justiça Eleitoral?',
		resposta: '<p>Desde as Eleições Municipais de 2000, toda a população brasileira escolhe, por meio da urna eletrônica, quem irá representá-la. Apesar de a tecnologia ter sido adotada com sucesso para a votação, naquela época, o procedimento de identificação do eleitorado ainda dependia integralmente da intervenção humana – as mesárias e os mesários recebiam os documentos da pessoa que fosse votar, verificavam seus dados, digitavam o número da inscrição na urna eletrônica e, se o registro do título eleitoral estivesse naquela seção, liberavam a urna para votação.</p>' + 
	'<p>Para tornar o processo eleitoral ainda mais seguro e evitar que uma pessoa votasse no lugar de outra, a Justiça Eleitoral deu início ao projeto de identificação biométrica do eleitorado. A adoção da biometria reduziu significativamente a intervenção humana no processo de votação. A urna só é liberada para votação quando o leitor biométrico identifica as impressões digitais da eleitora ou do eleitor, as quais são verificadas eletronicamente a partir do banco de dados unificado da Justiça Eleitoral.</p>' +
	'<p>Nas Eleições de 2008, a biometria foi testada pela primeira vez nos municípios de São João Batista (SC), Fátima do Sul (MS) e Colorado do Oeste (RO). Depois do sucesso da revisão biométrica nas três cidades, a Justiça Eleitoral decidiu dar continuidade, em 2010, ao projeto de identificação biométrica do eleitorado em outros 57 municípios. Dessa forma, nas eleições gerais daquele ano, 1,1 milhão de eleitoras e eleitores de 60 municípios de 23 estados votaram após verificação pela tecnologia da biometria.</p>' +
	'<p>Nas eleições de 2014, cerca de 21 milhões de cidadãs e cidadãos de 764 municípios de todos os estados e do Distrito Federal puderam utilizar a identificação biométrica. No pleito de 2018, por sua vez, o número de pessoas biometrizadas já passava de 85 milhões. Em 2020, aproximadamente 120 milhões de brasileiras e brasileiros já haviam realizado o cadastramento biométrico.</p>' +
	'<p>Devido à pandemia SARS-CoV-2 e em atendimento ao <a href="https://www.justicaeleitoral.jus.br/dicas-ao-eleitor/assets/arquivos/plano-saude-sanitaria.pdf">Plano de Segurança Sanitária</a> elaborado pelo TSE em parceria com o Ministério da Saúde (Fiocruz) e os hospitais Albert Einstein e Sírio-Libanês, não houve identificação biométrica do eleitorado nas eleições de 2020. Pelo mesmo motivo, os cartórios eleitorais de todo o país suspenderam o cadastramento de novas biometrias até que a presente situação de emergência sanitária se regularize.</p>' +
'<p>De todo modo, espera-se que quase 100% do eleitorado esteja apto a votar com identificação biométrica até as eleições de 2026.</p>'
	},
	pergunta_17: {
		sigla: 'pergunta_17',
		titulo: '17. Qual é o sistema que faz a gestão do cadastro biométrico?',
		resposta: '<p>O cadastro eleitoral brasileiro é o maior da América Latina e um dos mais confiáveis, justamente pela adoção de métodos de garantia de unicidade e unificação do cidadão e integridade dos dados. Com a identificação biométrica, é possível introduzir um elemento extremamente preciso, no sentido da individualização, por meio do sistema AFIS (<i>Automated Fingerprint Identification System</i>), que verifica as minúcias digitais de cada indivíduo e compara com todos os outros que estão no banco de dados. Essa tecnologia permite fazer o batimento eletrônico das dez impressões digitais de cada eleitor cadastrado com as digitais de todos os eleitores registrados no banco de dados da Justiça Eleitoral.</p><p>O batimento feito pelo sistema AFIS processa os registros biométricos existentes no Cadastro Nacional de Eleitores, realizando a comparação automatizada das impressões digitais para garantir que o registro do eleitor seja único. Adquirido em maio de 2014 pela Justiça Eleitoral, por meio de licitação, o sistema AFIS permite comparar até 160 mil impressões digitais por dia, o que pode ser ampliado, se necessário.</p>'+
		'<span class="tags">Tags: Qual é o método, qual é o modelo, qual é a técnica, qual é o programa, controla, gerencia, coordena, administra.</span>'
	},
	pergunta_18: {
		sigla: 'pergunta_18',
		titulo: '18. Qual é o benefício/vantagem de se fazer a biometria?',
		resposta: '<p>A vantagem de se fazer a biometria é ter a identidade confirmada pela impressão digital e garantir que nenhum outro eleitor se passará por você. Cada impressão digital é única. A biometria garante a segurança de seu voto!</p>'+
		'<span class="tags">Tags: Privilégio, proveito, incentivo, ganho, melhoria.</span>'
	},

	// perguntas sobre o título de eleitor

	pergunta_titulo_1: {
		sigla: 'pergunta_titulo_1',
		titulo: '1.	Como tirar o meu título de eleitor ou a segunda via?',
		resposta: '<p>Para tirar o seu título, você precisa procurar o cartório eleitoral mais próximo de onde mora. Leve com você um documento oficial brasileiro de identificação (com informações de nome, filiação, data de nascimento e nacionalidade), um comprovante de residência recente (últimos 3 meses) e, para as pessoas do sexo masculino, um documento que comprove a quitação com o serviço militar (exigência de 1º de julho do ano em que completar 18 anos até 31 de dezembro do ano em que completar 45 anos). Não se esqueça de verificar se o atendimento em sua zona eleitoral exige agendamento prévio. Agora, se você precisa de uma segunda via, pode utilizar a versão digital do seu título. Baixe o aplicativo e-Título para seu celular (disponível para Android ou IOS) ou tire uma nova via impressa no cartório eleitoral.</p>'+
		'<span class="tags">Tags: fazer o título, conseguir o título, obter o título, outra via, nova via, novo título.</span>'
	},
	pergunta_titulo_2: {
		sigla: 'pergunta_titulo_2',
		titulo: '2.	Como saber se meu título foi cancelado?',
		resposta: '<p>Você pode consultar sua situação eleitoral no <a href="http://www.tse.jus.br">site do TSE</a>. A consulta pode ser feita através do nome completo e data de nascimento ou número do título. Se sua situação não estiver regular, vá ao cartório eleitoral com documento oficial (com foto) e comprovante de residência. Se você tiver também título eleitoral e comprovantes de votação, de justificação ou de quitação de multa, melhor ainda. Leve também! Outra opção para consultar se o título está cancelado é telefonando para qualquer cartório eleitoral.</p>'+
		'<span class="tags">Tags: título anulado, título revogado, título inválido, título suspenso, título com problema.</span>'
	},
	pergunta_titulo_3: {
		sigla: 'pergunta_titulo_3',
		titulo: '3.	Como ter a situação eleitoral regular?',
		resposta: '<p>Em regra, para que sua situação eleitoral esteja regular você não deve ter incorrido em nenhuma causa de cancelamento (faltar à revisão de eleitorado, por exemplo). Agora, para ter quitação, você deve estar com o voto em dia, ter justificado as ausências e atendido às convocações da Justiça Eleitoral (para trabalhar como mesário, por exemplo) ou ter pago as multas.</p>'+
		'<span class="tags">Tags: situação normal, situação legal.</span>'
	},
	pergunta_titulo_4: {
		sigla: 'pergunta_titulo_4',
		titulo: '4.	Consultar local de votação',
		resposta: '<p>É possível obter a informação sobre o seu local de votação em qualquer Cartório Eleitoral, mediante apresentação de documento oficial de identificação pessoal e de seu título eleitoral (se o possuir). Pela internet, acesse o site do TSE no link <a href="http://www.tse.jus.br/eleitor-e-eleicoes/servicos/titulo-de-eleitor" target="_blank">http://www.tse.jus.br/eleitor-e-eleicoes/servicos/titulo-de-eleitor</a>. Preencha seus dados em todos os campos. Depois, escolha consultar pelo nome ou pelo título eleitoral. Vale ressaltar que é necessário que os dados informados estejam conforme o cadastro eleitoral, ou seja, de acordo com os dados fornecidos quando da emissão do seu título eleitoral.</p>'+
		'<span class="tags">Tags: onde voto, lugar que eu voto, região que eu voto, zona que eu voto.</span>'
	},
	pergunta_titulo_5: {
		sigla: 'pergunta_titulo_5',
		titulo: '5.	Consultar nº do título de eleitor',
		resposta: '<p>Pela internet, acesse o <a href="http://www.tse.jus.br/eleitor/servicos/titulo-de-eleitor/titulo-e-local-de-votacao/consulta-por-nome">site do TSE</a>. Preencha seus dados em todos os campos.</p>'+
		'<span class="tags">Tags: qual o número do meu título, qual o número da minha inscrição.</span>'
	},
	pergunta_titulo_6: {
		sigla: 'pergunta_titulo_6',
		titulo: '6.	Como encontrar o cartório eleitoral mais próximo?',
		resposta: '<p>Para encontrar o endereço do cartório eleitoral mais perto de você, acesse <a href="http://goo.gl/A8k4pf">goo.gl/A8k4pf</a>.</p><p>Você também pode consultar a relação de portais dos <a href=" http://goo.gl/M9HqNu">Tribunais Regionais Eleitorais (TREs)</a>.</p>'+
		'<span class="tags">Tags: cartório mais perto, cartório perto de casa.</span>'
	},
	pergunta_titulo_7: {
		sigla: 'pergunta_titulo_7',
		titulo: '7.	Como solicitar a transferência do título de eleitor?',
		resposta: '<p>Nem toda mudança precisa ser complicada! Se você mudou e pretende transferir seu domicílio eleitoral, é fácil: vá até o cartório mais próximo e leve documento original com foto, título de eleitor (se o tiver) e comprovante do novo endereço. É preciso estar residindo há pelo menos três meses no novo município e que já tenha transcorrido, no mínimo, um ano da data do alistamento eleitoral ou da última transferência do título. Verifique primeiro se o atendimento em sua zona eleitoral exige agendamento.</span>'
	},
	pergunta_titulo_8: {
		sigla: 'pergunta_titulo_8',
		titulo: '8.	O que deve fazer o eleitor que mora ou está no exterior?',
		resposta: '<p>Cidadãos brasileiros maiores de 16 anos residentes no exterior poderão iniciar seu atendimento para solicitar alistamento eleitoral, revisão de dados cadastrais e transferência de domicílio eleitoral pela internet, mediante a utilização do Título Net Exterior, que é a ferramenta de entrada de dados no requerimento eleitoral.</p><p>Na votação: se você é eleitor inscrito no Brasil, continua obrigado a votar aqui. Se não conseguir votar, precisa justificar sua ausência, lembrando que cada turno é uma eleição diferente!</p><p>O Requerimento de Justificativa Eleitoral (RJE) – <a href="http://goo.gl/f4bAJZ">goo.gl/f4bAJZ </a> – deve estar acompanhado de cópia de documento oficial brasileiro de identidade e de comprovante dos motivos alegados para justificar a ausência (cópia do passaporte, cartão de embarque, matrícula em instituição de ensino, contrato de trabalho etc). É possível votar para presidente e vice-presidente mesmo no exterior. Mais informações em <a href="http://goo.gl/X5WUjA">goo.gl/X5WUjA</a>.</p>'+
		'<span class="tags">Tags: moro fora, moro no exterior, não moro no Brasil.</span>'
	},
	pergunta_titulo_9: {
		sigla: 'pergunta_titulo_9',
		titulo: '9. O que é o e-Título?',
		resposta: '<p>O e-Título é um aplicativo móvel para obtenção da via digital do título de eleitor. Ele permite o acesso rápido e fácil às suas informações junto à Justiça Eleitoral, tais como: título de eleitor digital, sua situação eleitoral e local de votação. É importante lembrar: se você ainda não fez a biometria, seu e-Título precisa ser usado junto com um documento oficial com foto. É a Justiça Eleitoral inovando e modernizando, como sempre! Baixe agora o e-Título, disponível para IOS e Android.</p>'+
		'<span class="tags">Tags: aplicativo do título, título na internet, título no celular.</span>'
	},
	pergunta_titulo_10: {
		sigla: 'pergunta_titulo_10',
		titulo: '10.	Como emitir boletos de multas?',
		resposta: '<p>Caso o eleitor tenha deixado de votar, é possível emitir o boleto da multa para pagamento pelo site do TSE por meio do serviço “Consulta de débitos do Eleitor” no seguinte link: <a href="http://www.tse.jus.br/eleitor-e-eleicoes/servicos/titulo-de-eleitor/quitacao-de-multas">http://www.tse.jus.br/eleitor-e-eleicoes/servicos/titulo-de-eleitor/quitacao-de-multas </a>. Vale ressaltar que a emissão e o pagamento do boleto não são suficientes para a regularização da situação, devendo o eleitor apresentar o respectivo comprovante de pagamento em qualquer unidade da Justiça Eleitoral para regularizar sua situação.</p>'+
		'<span class="tags">Tags: tirar boleto, imprimir multa, gerar boleto, pagar multa, pagar taxa.</span>'
	},

	// perguntas sobre a segurança da urna

	pergunta_seguranca_1: {
		sigla: 'pergunta_seguranca_1',
		titulo: '1.	Como o eleitor pode ter certeza de que a urna eletrônica é segura?',
		resposta: '<p>A urna eletrônica conta com diversos mecanismos por meio dos quais o próprio eleitor ou as entidades da sociedade civil podem verificar a segurança e o funcionamento do sistema de votação. A Justiça Eleitoral utiliza o que há de mais moderno em termos de segurança da informação para garantir a integridade, a autenticidade e, quando necessário, o sigilo. Esses mecanismos foram postos à prova durante os Testes Públicos de Segurança, nos quais se mostraram robustos e foram aprimorados a partir da contribuição da comunidade técnica especializada. Além disso, há diversos mecanismos de auditoria e de verificação dos resultados que podem ser efetuados pelos candidatos, pelas coligações, pelo Ministério Público, pela Ordem dos Advogados do Brasil, pela Polícia Federal – dentre outras entidades – e também pelo próprio eleitor. Um dos procedimentos de segurança que pode ser acompanhado pelo próprio eleitor é a cerimônia de votação paralela. Na véspera da eleição, em audiência pública, são sorteadas urnas para verificação. Essas urnas – que já estavam instaladas nos locais de votação – são, então, conduzidas ao Tribunal Regional Eleitoral e substituídas por outras, preparadas com o mesmo procedimento das originais. No dia da votação, em cerimônia pública, as urnas sorteadas são submetidas à votação, nas mesmas condições em que ocorreria na seção eleitoral, mas com o registro, em paralelo, dos votos que são depositados na urna eletrônica. Cada voto é registrado numa cédula de papel e, em seguida, replicado na urna eletrônica, tudo isso registrado em vídeo. Ao final do dia, no mesmo horário em que se encerra a votação, são feitas a apuração das cédulas de papel e a comparação do resultado com o boletim da urna. Esse é um procedimento de fácil compreensão, cujo acompanhamento é  bastante simples. Outro mecanismo bastante simples de verificação é a conferência do Boletim de Urna (BU). Ao final da votação, o BU, com a apuração dos votos de uma seção, é documento público. O resultado de cada boletim pode ser facilmente confrontado com aquele publicado pelo Tribunal Superior Eleitoral na Internet, seja pela conferência do resultado de cada seção eleitoral, seja pela conferência do resultado da totalização final. Esse procedimento – há muito tempo amplamente realizado pelos partidos políticos e pelas coligações – também pode ser feito pelo eleitor.</p>'+
		'<span class="tags">Tags: a urna é garantida, a urna é confiável.</span>'
	},
	pergunta_seguranca_2: {
		sigla: 'pergunta_seguranca_2',
		titulo: '2.	Como funciona a segurança da urna eletrônica? É possível executar aplicativos não autorizados na urna?',
		resposta: '<p>A urna eletrônica utiliza o que há de mais moderno quanto às tecnologias de criptografia, assinatura digital e resumo digital. Toda essa tecnologia é utilizada pelo hardware e pelo software da urna eletrônica para criar uma cadeia de confiança, garantindo que somente o software desenvolvido pelo Tribunal Superior Eleitoral (TSE), gerado durante a cerimônia de lacração dos sistemas eleitorais, possa ser executado nas urnas eletrônicas devidamente certificadas pela Justiça Eleitoral. Qualquer tentativa de executar software não autorizado na urna eletrônica resultará no bloqueio do seu funcionamento. De igual modo, tentativas de executar o software oficial num hardware não certificado implicam cancelamento da execução do aplicativo. Toda essa tecnologia tem sido exercitada durante os Testes Públicos de Segurança, o que tem permitido ao TSE tornar esses mecanismos cada vez mais seguros. Para todo o conjunto de software produzido durante a cerimônia de lacração dos sistemas eleitorais, são gerados assinaturas e resumos digitais. Caso haja qualquer suspeição quanto à autenticidade do software da urna eletrônica, as assinaturas digitais e os resumos digitais podem ser conferidos e validados, tanto por aplicativos desenvolvidos pelo TSE quanto por software desenvolvido pelos partidos políticos, pelo Ministério Público, pela Ordem dos Advogados do Brasil ou por outras entidades. Além disso, todos os dados que alimentam a urna eletrônica assim como todos os resultados produzidos são protegidos por assinatura digital. Não é possível modificar os dados de candidatos e de eleitores presentes na urna, por exemplo. Da mesma forma, não é possível modificar o resultado da votação contido no BU, o registro das operações feitas pelo software (log) e o arquivo de Registro Digital do Voto (RDV), dentre outros arquivos produzidos pela urna, uma vez que todos também estão protegidos pela assinatura digital. Por fim, não é possível executar aplicativos não autorizados na urna eletrônica, tampouco modificar algum aplicativo da urna. </p>'+
		'<span class="tags">Tags: como a urna opera, como a urna trabalha, como a urna funciona.</span>'
	},
	pergunta_seguranca_3: {
		sigla: 'pergunta_seguranca_3',
		titulo: '3.	A urna eletrônica é vulnerável a ataques externos?',
		resposta: '<p>A urna eletrônica não é vulnerável a ataques externos. Ela é um equipamento que funciona de forma isolada, ou seja, não apresenta nenhum mecanismo que possibilite sua conexão a redes de computadores, como a Internet. Além disso, não possui o hardware necessário para se conectar a uma rede ou mesmo a qualquer forma de conexão com ou sem fio. Vale destacar que o sistema operacional Linux contido na urna é preparado pela Justiça Eleitoral de forma a não incluir nenhum mecanismo de software que permita a conexão com redes ou o acesso remoto. Ademais, as mídias utilizadas pela Justiça Eleitoral para a preparação da urna e gravação dos resultados são protegidas por técnicas modernas de assinatura digital. Não é possível a um atacante modificar qualquer arquivo presente nessas mídias.</p>'+
		'<span class="tags">Tags: a urna é frágil, a urna é desprotegida,  a urna é atacável.</span>'
	},
	pergunta_seguranca_4: {
		sigla: 'pergunta_seguranca_4',
		titulo: '4.	Como o TSE controla/fiscaliza possíveis violações por pessoas que trabalham para a Justiça Eleitoral?',
		resposta: '<p>A Justiça Eleitoral utiliza ferramentas modernas de controle de versão do código-fonte dos sistemas eleitorais. A partir dessas ferramentas, é possível acompanhar toda modificação feita sobre o código-fonte, o que foi modificado e por quem. Somente grupo restrito de servidores e de colaboradores do Tribunal Superior Eleitoral tem acesso ao repositório de código-fonte e está autorizado a fazer modificações no software. Por isso, o software utilizado nas eleições é o mesmo em todo o Brasil e está sob controle estrito do Tribunal Superior Eleitoral. De outra forma, o conhecimento sobre os sistemas eleitorais é segregado dentro do TSE. Isso significa que a equipe responsável pelo software da urna não é a mesma que cuida do sistema de totalização. Esse controle de acesso ocorre inclusive no âmbito de sistema de controle de versões. A quantidade de sistemas eleitorais envolvidos na realização de uma eleição é tão grande que se torna impraticável a um agente interno ter grau de conhecimento do todo que lhe permita realizar algum tipo de ataque. Ademais, durante o período de desenvolvimento dos sistemas eleitorais, são realizados diversos testes tanto pelo TSE quanto pelos Tribunais Regionais, com o objetivo de averiguar o correto funcionamento de todo o conjunto de software. Os partidos políticos, o Ministério Público, a Ordem dos Advogados do Brasil, a Polícia Federal e outras entidades podem acompanhar o desenvolvimento do software por meio da inspeção do código-fonte, no próprio ambiente no qual serão gerados os aplicativos utilizados nas eleições. Além dos servidores do quadro da Justiça Eleitoral, são contratados, durante o período eleitoral, colaboradores para a prestação de apoio às atividades de transporte, preparação e manutenção das urnas eletrônicas. Também são convocados milhares de mesários para o dia da votação. Em nenhum momento, esses colaboradores ou os mesários possuem acesso ao código-fonte dos sistemas eleitorais. Embora essas pessoas tenham contato com as urnas eletrônicas, elas são incapazes de violar o software e o hardware. Isso é garantido pelos diversos mecanismos de segurança, baseados em assinatura digital e em criptografia, que criam cadeia de confiança entre hardware e software e impedem qualquer violação da urna eletrônica. </p>'+
		'<span class="tags">Tags: Atentado, crime, delito, infração, abuso, vistoria, monitora, supervisiona, reprime, coordena, comanda.</span>'
	},
	pergunta_seguranca_5: {
		sigla: 'pergunta_seguranca_5',
		titulo: '5.	Desde a implantação da urna eletrônica, quantos e quais são os casos de suspeita de fraude identificados pelo TSE?',
		resposta: '<p>A urna eletrônica foi implantada nas eleições brasileiras de 1996. Nestes 22 anos, são frequentes os casos de suspeita de fraude. No entanto, nenhum caso até hoje foi identificado e comprovado. Essa conclusão é do TSE e também de outros órgãos que, constitucionalmente, têm a prerrogativa de investigar o processo eleitoral brasileiro e já realizaram auditorias independentes na urna eletrônica, como o Ministério Público e a Polícia Federal. Em 2014 o partido do candidato derrotado na eleição presidencial conduziu extenso trabalho de auditoria das eleições daquele ano. Foram fornecidos os resultados de todas as urnas do país. A equipe do partido também teve acesso direto a urnas e a outros materiais das seções eleitorais. Após seis meses de trabalho, a conclusão da equipe do partido foi de que o resultado da eleição correspondia fielmente aos resultados apurados em todas as urnas, ou seja, não houve fraude na totalização dos votos. Na verdade, a informatização do processo eleitoral brasileiro conseguiu eliminar uma série de manobras e desvios responsáveis por muitas fraudes nas eleições. Desde o cadastro único computadorizado de eleitores, em 1985, até a adoção do reconhecimento biométrico do eleitor, são inúmeros os mecanismos de combate à fraude que a Justiça Eleitoral vem adotando.</p>'+
		'<span class="tags">Tags: Desconfiança, hipótese, falcatrua, farsa, engano, golpe, trapaça, falsificação.</span>'
	},
	pergunta_seguranca_6: {
		sigla: 'pergunta_seguranca_6',
		titulo: '6.	Por que o modelo de urna utilizado no Brasil não foi adotado em outros países?',
		resposta: '<p>O Brasil não trabalha com modelo de urna eletrônica que esteja disponível no mercado. A urna eletrônica brasileira é projeto único, desenvolvido para atender à realidade nacional, não se tratando de produto destinado à exportação. Desde o advento da urna eletrônica, em 1996, diversos países têm consultado o Tribunal Superior Eleitoral com o objetivo de conhecer e adotar essa inovadora tecnologia brasileira. Em alguns casos, parcerias foram firmadas com o propósito de compartilhar conhecimento entre as nações. A partir de então, o voto eletrônico tem sido adotado por muitos países e, naturalmente, cada nação tem feito as adequações tecnológicas necessárias para compatibilizar a tecnologia com sua legislação, cultura e economia. As parcerias firmadas no passado com outros países incluíram o empréstimo de urnas eletrônicas e as adequações de software necessárias para atender à legislação do país parceiro. Na prática, o TSE foi o responsável por todo o suporte de software e de hardware das eleições desses países, tudo devidamente acompanhado e fiscalizado pelas autoridades locais. Infelizmente, restrições orçamentárias e de pessoal forçaram o Tribunal Superior Eleitoral a encerrar essas parcerias e, a partir daí, alguns países não foram capazes de desenvolver tecnologia própria e abdicaram do voto eletrônico. Outros países, após a troca de experiências com o TSE, desenvolveram sistemas informatizados próprios ou julgaram que o voto eletrônico possuía custo muito elevado de implantação – em locais onde a incidência de fraudes eleitorais é muito baixa ou a quantidade de eleitores é reduzida, o custo de adoção do voto eletrônico pode ser proibitivo. Atualmente, diversos países utilizam o voto eletrônico com regularidade, total ou parcialmente, e outros ainda estão testando e desenvolvendo soluções próprias.</p>'+
		'<span class="tags">Tags: Marca, espécie, exemplar, protótipo.</span>'
	},
	pergunta_seguranca_7: {
		sigla: 'pergunta_seguranca_7',
		titulo: '7. O que é o Registro Digital do Voto (RDV)?',
		resposta: '<p>O RDV é o arquivo no qual os votos dos eleitores são registrados na urna. É a partir desse arquivo que é emitido o relatório “zerésima” – que indica que a urna não possui votos registrados. Também, com base no RDV, é gerado o Boletim de Urna (BU) – relatório com a apuração dos votos da seção.</p>' +
			'<p>O arquivo de RDV possui duas características importantes:</p>' +
			'<p>• o voto é registrado exatamente como digitado pelo eleitor: o RDV registra exatamente aquilo que foi digitado pelo eleitor na urna – e somente isso – sem nenhum processamento ou informação adicional (não há como vincular um voto no RDV a um eleitor). O RDV é utilizado somente no encerramento da votação para gerar o BU e, assim, realizar o somatório dos votos de cada candidato ou legenda e o cômputo de votos nulos e brancos. Como o RDV preserva exatamente aquilo que o eleitor digitou, esse arquivo é um instrumento importante de auditoria e de verificação da correta apuração de uma seção; e</p>' +
			'<p>• o registro do voto garante seu sigilo: assim como numa urna de lona tradicional, na qual as cédulas de papel ficam embaralhadas, impossibilitando a vinculação de cada cédula a um eleitor, no RDV cada voto é gravado numa posição aleatória do arquivo. Em particular, o voto, em cada cargo, é armazenado numa posição diferente, não permitindo nenhum tipo de associação entre votos, tampouco a associação desses votos com a sequência de comparecimento dos eleitores.</p>' +
			'<p>Aos partidos políticos e às coligações, é permitida a obtenção de cópias dos arquivos de RDV de todas as urnas que julgarem necessárias. De posse do RDV e da especificação do formato do arquivo, disponibilizada pela Justiça Eleitoral, os partidos e as coligações desenvolvem aplicativos próprios para comparação da apuração oficial da urna eletrônica com aquela produzida pelo seu próprio software.</p>' +
			'<span class="tags">Tags: Cadastro</span>'
	},
	pergunta_seguranca_8: {
		sigla: 'pergunta_seguranca_8',
		titulo: '8. Por que o voto não é impresso? A Justiça Eleitoral está descumprindo a lei?',
		resposta: '<p>O voto impresso foi instituído pela Lei nº 13.165/2015. Embora a lei previsse sua implantação a partir das Eleições 2018, o Supremo Tribunal Federal decidiu pela não implantação desse dispositivo até que seja julgada a constitucionalidade da impressão de votos. Com isso, a Justiça Eleitoral está impedida de implantar o voto impresso no momento.</p>' +
			'<p>Os propósitos do voto impresso são:</p>' +
			'<p>• melhorar a capacidade de auditoria e permitir a recontagem de votos; e</p>' +
			'<p>• permitir que o eleitor comprove se o voto manifestado por ele é o mesmo que chegou ao TSE para totalização.</p>' +
			'<p>No caso da auditoria, a partir de amostragem das urnas, os votos em papel seriam apurados e comparados com o resultado apresentado pela urna eletrônica. Parte-se do princípio de que o total dos votos impressos é mais confiável que o total da urna eletrônica, uma vez que teria sido conferido pelo eleitor.</p>' +
			'<p>De outro modo, devido à intervenção manual direta, a possibilidade de fraude com relação ao papel é grande, o que acarretaria resultados divergentes e menos confiáveis que o da própria urna eletrônica. Na prática, o que se vislumbra é que o alvo de ataques seja deslocado da urna eletrônica para o seu processo de auditoria por contagem dos votos impressos, o que pode implicar a anulação indevida de votos ou até mesmo a convocação de novas eleições num cenário em que a vontade do eleitor esteja perfeitamente íntegra nos registros eletrônicos.</p>' +
			'<p>Assim como o voto evoluiu do papel para o meio eletrônico, também é preciso que os processos de auditoria evoluam. Existem outras formas de auditoria mais baratas e seguras do que o uso do voto impresso. A Justiça Eleitoral, inclusive, já faz uso delas, como a votação paralela e a apresentação do código-fonte nos seis meses que antecedem o fechamento do software para uso nas eleições. E o próprio arquivo de RDV é instrumento de auditoria importante, já utilizado pelos partidos e pelas coligações para verificação da integridade da apuração da urna eletrônica.</p>' +
			'<p>Com relação à comprovação pelo eleitor de seu próprio voto, essa possibilidade viola o sigilo do voto, que é uma garantia expressa pela Constituição, uma vez que o eleitor poderá apresentar prova do seu voto a outra pessoa. Mesmo com registro impresso do voto, o eleitor nunca poderá ter a garantia de que seu voto foi efetivamente contado num processo de auditoria.</p>' +
			'<p>Desde a aprovação da Lei nº 13.165/2015, o Tribunal Superior Eleitoral conduziu todos os esforços necessários para a implantação do voto impresso a partir das Eleições 2018: a regulamentação da lei foi elaborada, discutida e aprovada; as alterações no software da urna foram desenvolvidas; e uma empresa foi contratada por licitação para o fornecimento das impressoras de votos.</p>' +
			'<span class="tags">Tags: Voto em papel, Violando a lei, transgredindo a lei, desobedecendo a lei, desacatando a lei, contrariando a lei, desrespeitando a lei</span>'
	},
	pergunta_seguranca_9: {
		sigla: 'pergunta_seguranca_9',
		titulo: '9. O sistema da urna eletrônica mantém registro das suas operações?',
		resposta: '<p>A urna eletrônica mantém arquivo com o registro cronológico das principais operações realizadas pelo seu software – esse é o arquivo de log. Entre outras operações, ficam registrados, nesse arquivo, o início e o encerramento da votação, a emissão de relatórios, os aplicativos que foram executados, os ajustes de data e hora, a realização de procedimentos de contingência e os registros que auxiliam na avaliação da dinâmica do voto.</p>' +
			'<p>O arquivo de log é mais um mecanismo de transparência e de auditoria disponibilizado pela Justiça Eleitoral. A partir do log, é possível analisar toda a história da urna eletrônica, desde a sua preparação até o encerramento da votação no segundo turno. Assim como o arquivo de RDV, o arquivo de log também é disponibilizado aos partidos políticos e às coligações, para que estes façam sua própria análise dos eventos ocorridos na urna eletrônica.</p>' +
			'<p>A partir dos arquivos de log de todas as urnas eletrônicas, o Tribunal Superior Eleitoral monta poderoso banco de dados, do qual é possível extrair informações valiosas sobre a dinâmica da votação. Essas informações subsidiam a melhoria de diversos processos relacionados à urna eletrônica, tais como a preparação da urna, os componentes que estão apresentando maior taxa de defeitos, a velocidade da votação e a dinâmica da utilização da biometria. Tudo isso é utilizado para prover melhor atendimento ao eleitor no dia da votação e para agilizar os trabalhos de preparação e fiscalização das urnas eletrônicas.</p>' +

			'<span class="tags">Tags: Registro das atividades, registro das ações, registro dos passos, registro do trabalho</span>'
	},
	pergunta_seguranca_10: {
		sigla: 'pergunta_seguranca_10',
		titulo: '10. Qual a finalidade de o sistema da urna eletrônica armazenar a hora de votação ?',
		resposta: '<p>A urna eletrônica armazena a hora em que um eleitor foi habilitado para votar, sem identificá-lo. Essa informação é útil para o cálculo de indicadores gerenciais, como o tempo médio de votação do eleitor. Com base nessa informação, é possível, por exemplo, realizar análise sobre a quantidade de eleitores por seção, permitindo à Justiça Eleitoral ajustar esse número a fim de reduzir a ocorrência de filas, de modo que o eleitor vote com tranquilidade.</p>' +
			'<span class="tags">Tags: Objetivo, intuito, função, propósito, utilidade, guardar, registrar, manter, memorizar, arquivar</span>'
	},
	pergunta_seguranca_11: {
		sigla: 'pergunta_seguranca_11',
		titulo: '11. O que são os Testes Públicos de Segurança?',
		resposta: '<p>Os Testes Públicos de Segurança têm por objetivo fortalecer a confiabilidade, a transparência e a segurança da captação e da apuração dos votos, além de propiciar melhorias no processo eleitoral. Nesse sentido, o TSE editou, em 2015, a Resolução nº 23.444, dispondo que os Testes Públicos de Segurança constituem parte integrante do processo eleitoral brasileiro e serão realizados antes de cada eleição ordinária, preferencialmente no segundo semestre dos anos que antecedem os pleitos eleitorais.</p>' +
			'<p>Ao abrir os sistemas para inspeção dos códigos-fonte e para os exercícios diversos, a Justiça Eleitoral busca encontrar oportunidades de aprimoramento dos mecanismos de segurança do software, contando com a visão e com a experiência de outros órgãos públicos, de estudiosos e de qualquer cidadão interessado.</p>' +
			'<p>Os Testes Públicos de Segurança são utilizados pelo TSE como instrumento auxiliar para a melhoria contínua dos sistemas eleitorais, não havendo interesse da Justiça Eleitoral em promover qualquer tipo de competição ou promoção individual dos participantes.</p>' +

			'<span class="tags">Tags: 11-	Coletivo, popular, geral, aberto</span>'
	},
	pergunta_seguranca_12: {
		sigla: 'pergunta_seguranca_12',
		titulo: '12. A falha encontrada no embaralhamento dos votos em 2012 compromete a integridade dos resultados? Ela já foi corrigida?',
		resposta: '<p>A falha encontrada no Teste Público de Segurança realizado em 2012 estava relacionada ao algoritmo de embaralhamento dos votos no RDV, ou seja, à ordem de gravação dos votos de cada eleitor. De nenhuma forma, a contagem dos votos é afetada, portanto o resultado é íntegro.</p>' +
			'<p>Para corrigir a não conformidade encontrada e inviabilizar o reordenamento dos votos, o algoritmo foi modificado e aprimorado imediatamente após a descoberta do problema. Visando a certificar a qualidade do novo algoritmo, inúmeros testes foram realizados exaustivamente, todos baseados em técnicas utilizadas internacionalmente. Uma dessas técnicas é o DieHard, um teste de aleatoriedade que verifica a efetividade do embaralhamento de sequências. Também foram utilizadas regras estabelecidas pelo National Institute of Standards and Technology .</p>' +
			'<p>A solução implementada foi aberta a amplo escrutínio, inclusive nas edições de 2016 e de 2017 dos Testes Públicos de Segurança. O software atual se mostrou robusto e não foi mais alvo de ataques.</p>' +

			'<span class="tags">Tags: Mistura dos votos</span>'
	},
	pergunta_seguranca_13: {
		sigla: 'pergunta_seguranca_13',
		titulo: '13. As falhas encontradas em 2017 já foram corrigidas?',
		resposta: '<p>Todas as falhas encontradas nos Testes Públicos de Segurança de 2017 já foram corrigidas. O Tribunal Superior Eleitoral deu total transparência aos achados dos investigadores, publicando <a href="http://www.tse.jus.br/hotsites/teste-publico-seguranca-2017/arquivos/tps2017-relatoriotecnico.pdf" target="_blank">relatório detalhado</a>.  Em maio de 2018, os investigadores foram convidados a verificar a efetividade das correções implementadas no software e a conclusão foi de que tudo está corrigido. A equipe técnica do TSE também deu total transparência às correções efetuadas em <a href="http://www.justicaeleitoral.jus.br/arquivos/relatorio-tecnico-tps-2017-1527192798117" target="_blank">relatório publicado</a>.</p>' +
			'<p>A realização periódica dos Testes Públicos de Segurança tem se mostrado grande sucesso, na medida em que a comunidade técnica especializada tem ajudado efetivamente a equipe técnica do Tribunal Superior Eleitoral a desenvolver sistemas cada vez mais seguros para as eleições.</p>' +
			'<span class="tags">Tags: Defeitos, erros, problemas, lacunas</span>'
	},
	pergunta_seguranca_14: {
		sigla: 'pergunta_seguranca_14',
		titulo: '14. O código-fonte do Software de Votação pode ser aberto à comunidade?',
		resposta: '<p>Atualmente, já é permitido aos representantes técnicos dos partidos políticos, ao Ministério Público, à Ordem dos Advogados do Brasil, à Polícia Federal, entre outras entidades, o acesso ao código-fonte do Software de Votação e de todo o conjunto de software da urna eletrônica. Portanto, já existe transparência sobre o código-fonte. Naturalmente, o Tribunal Superior Eleitoral estuda ampliar ainda mais o acesso ao código-fonte para que mais pessoas e instituições possam verificar a correção e lisura do software.</p>' +

			'<span class="tags">Tags: </span>'
	},
	pergunta_seguranca_15: {
		sigla: 'pergunta_seguranca_15',
		titulo: '15. É possível dizer que a urna brasileira é de primeira geração? As ditas urnas de segunda e terceira gerações são mais seguras?',
		resposta: '<p>A urna eletrônica brasileira é um equipamento inovador e foi introduzido no processo eleitoral em 1996. Todo o projeto de hardware e de software da urna é conduzido pelo Tribunal Superior Eleitoral, que tem contado com o apoio de membros da academia desde sua concepção até as mais recentes evoluções realizadas. Trata-se, portanto, de projeto desenvolvido completamente no Brasil que passa por constante evolução, cuja fabricação, por delegação do TSE, fica a cargo de uma empresa contratada por licitação.</p>' +
			'<p>A denominação de “gerações” de urnas, comumente utilizada como estratégia de mercado para a venda de equipamentos mais novos, geralmente está associada ao modo de operação do sistema: registro totalmente eletrônico, tal como feito pela urna brasileira, registro material que é digitalizado (registro em papel é submetido a um scanner, por exemplo) ou registro digitalizado que é materializado (o equipamento imprime registro do voto, por exemplo), sendo as duas últimas associadas à “segunda geração”. Esses diversos modos de operação foram empregados em vários momentos, por diferentes países e com tecnologias distintas, não sendo possível traçar linha evolutiva entre eles, tampouco se pode afirmar que determinado modelo é mais ou menos seguro que outro. Além disso, a materialização do voto em papel abre brechas para que esse instrumento de auditoria seja atacado, tal como já ocorria antes do voto eletrônico.</p>' +
			'<p>A chamada “terceira geração” fornece ao eleitor mecanismo de verificação quanto à inclusão do seu voto no sistema de totalização. Caso o mecanismo não inclua alguma forma que preserve o sigilo do voto, inclusive para o próprio eleitor, este poderá ser coagido a votar e a entregar o comprovante ao criminoso. Além disso, se ao eleitor somente é permitido verificar se o seu voto foi contabilizado com a utilização de sistema informatizado, recai-se sobre o mesmo problema de confiança exclusiva no software, tão criticado na “primeira geração”.</p>' +
			'<p>A urna eletrônica brasileira é um projeto com foco em segurança de hardware e de software que conta com diversos mecanismos de auditoria. Trata-se de produto moderno e em constante aprimoramento, com processo evolutivo próprio. Ao longo dos últimos anos, foram incluídos leitores biométricos, mídias de armazenamento e processadores de maior capacidade e confiabilidade, bem como hardware criptográfico. Com efeito, todos esses avanços incrementam substancialmente a confiabilidade e a segurança do voto eletrônico.</p>' +

			'<span class="tags">Tags: </span>'
	},
	pergunta_seguranca_16: {
		sigla: 'pergunta_seguranca_16',
		titulo: '16. O que é o aplicativo Ajuste de Data e Hora (ADH)? É possível utilizá-lo para fraudar os votos de uma urna?',
		resposta: '<p>O aplicativo ADH faz parte da instalação da urna eletrônica e é utilizado para efetuar ajustes no relógio da urna. É utilizado em situações em que o operador informou data e hora incorretas durante a preparação da urna para a eleição. Ele também é utilizado nos casos em que o relógio da urna apresenta algum problema de bateria e passa a apresentar hora incorreta. Não é possível utilizar o ADH para fraudar os votos de uma urna.</p>' +
			'<p>É importante que o relógio da urna esteja com a data e hora corretas, pois algumas operações são controladas em função disso, tais como:</p>' +
			'<p>• liberação da emissão da “zerésima”, a partir das 7h do dia da votação;</p>' +
			'<p>• liberação para habilitação de eleitores, a partir das 8h do dia da votação; e</p>' +
			'<p>• liberação para encerramento da votação, a partir das 17h do dia da votação.</p>' +
			'<p>Não é possível utilizar o ADH para realizar qualquer tipo de fraude na urna eletrônica. Apesar disso, tem sido alardeado recentemente que possível fraude envolveria o uso do ADH. O ataque ocorreria da seguinte forma:</p>' +
			'<p>• o atacante tem acesso a uma urna preparada para a eleição antes do dia da votação e a uma mídia de ativação do ADH;</p>' +
			'<p>• utiliza-se o ADH para adiantar o relógio da urna até o dia e hora de início da votação;</p>' +
			'<p>• faz-se a inserção de votos espúrios na urna até o horário de encerramento;</p>' +
			'<p>• retira-se a mídia com o resultado espúrio, e esta é guardada até o dia da votação;</p>' +
			'<p>• novamente utiliza-se o ADH para ajustar o relógio da urna com a data e hora reais, outra mídia vazia para a gravação dos resultados é inserida na urna e seu compartimento é lacrado;</p>' +
			'<p>• no dia da votação, na seção eleitoral, essa urna coletaria os votos reais normalmente; porém, ao final da votação, em vez de encaminhar para transmissão dos resultados a mídia utilizada na seção eleitoral, utiliza-se a mídia com os votos espúrios gerados com antecedência.</p>' +
			'<p></p>' +
			'<p>Em resumo, a hipótese apresentada é que o controle para início da captação de votos está sustentado somente na data e hora atuais. Ocorre que isso não é verdade.</p>' +
			'<p>O Software de Votação mantém o último estado de sua execução. Isso significa que, uma vez encerrada a votação, há bloqueio no software da urna que impede a captação de votos até que esta seja preparada para o segundo turno, ou seja, preparada para nova eleição.</p>' +
			'<p>Além disso, em nenhum momento, o Software de Votação apaga ou reinicia os registros contidos no arquivo de RDV que contém cada voto inserido na urna. É a partir do RDV que o software emite o relatório “zerésima”, indicando que não há votos presentes na urna.</p>' +
			'<p>Por último, mesmo que houvesse troca de mídias e tivessem sido gerados dois resultados diferentes, o registro impresso pelo Boletim de Urna na seção não coincidiria com aquele recebido pela totalização. Facilmente os fiscais de partido – e qualquer cidadão, na verdade – poderiam confrontar o resultado apurado para uma seção pela totalização oficial com aquele que foi publicado na seção eleitoral; este último retrata o resultado real e correto.</p>' +

			'<span class="tags">Tags: Software, programa, sistema operacional</span>'
	},
	pergunta_seguranca_17: {
		sigla: 'pergunta_seguranca_17',
		titulo: '17. Existe mesmo chave única que protege todas as mídias das urnas? De posse dessa chave, seria possível adulterar o conteúdo das mídias?',
		resposta: '<p>Parte das mídias utilizadas nas urnas utiliza mecanismo geral para ocultação das informações, que é a criptografia do sistema de arquivos. As mídias em questão são os cartões de memória da urna (interno e externo), nos quais estão gravados o sistema operacional e os aplicativos (cartão interno), os dados de eleitores e de candidatos e os resultados da votação (duplicados nos cartões interno e externo).</p>' +
			'<p>O objetivo da criptografia do sistema de arquivos é impor barreira adicional a um atacante externo com pouco ou nenhum conhecimento sobre a organização do software da urna. Dessa forma, um possível atacante encontraria dificuldades em iniciar análise do conteúdo das mídias.</p>' +
			'<p>Existe chave única utilizada pela criptografia do sistema de arquivos de todos os cartões de memória. Se essa chave não fosse única, seria impraticável realizar procedimentos de contingência – como substituir uma urna defeituosa por outra em perfeito estado, permitindo que a votação continue do mesmo ponto em que foi interrompida. Além disso, se a chave não fosse única, qualquer auditoria sobre as urnas estaria comprometida. No entanto, é incorreto afirmar que, a partir da posse da chave do sistema de arquivos, é possível gerar mídias “de diferente teor”.</p>' +
			'<p>É importante destacar que a criptografia do sistema de arquivos não é o mecanismo no qual se sustenta toda a segurança do software da urna.</p>' +
			'<p>Na verdade, todos os arquivos que requerem integridade e autenticidade são assinados digitalmente. Esse é o caso, por exemplo, dos aplicativos da urna e dos arquivos de dados de eleitores e de candidatos, assim como do Boletim de Urna e do registro digital do voto, entre outros. Além disso, os arquivos que requerem sigilo são criptografados. Em todos esses casos, são utilizadas chaves diversas. Esses mecanismos de assinatura e de criptografia impedem que o conteúdo das mídias seja adulterado.</p>' +

			'<span class="tags">Tags: Código</span>'
	},
	pergunta_seguranca_18: {
		sigla: 'pergunta_seguranca_18',
		titulo: '18. A empresa Smartmatic fabrica as urnas brasileiras e cuida de todo o processo eleitoral?',
		resposta: '<p>A urna eletrônica brasileira nunca foi fabricada pela Smartmatic. Na sua concepção, entre os anos de 1995 e 1996, a elaboração do projeto técnico de hardware e de software da urna foi realizada por grupo de trabalho composto por especialistas em informática, eletrônica e comunicações. Desse feito participaram integrantes da Justiça Eleitoral, das Forças</p>' +
			'<p>Armadas, do Ministério da Ciência e Tecnologia, do Instituto Tecnológico de Aeronáutica, do Instituto Nacional de Pesquisas Espaciais e do Ministério das Comunicações.</p>' +
			'<p>Desde então, a fabricação das urnas é de responsabilidade de empresas contratadas em processo licitatório, plenamente transparente e auditável. Em nenhuma ocasião, a Smartmatic foi vencedora dessa licitação. Além disso, todo o software dos sistemas envolvidos nas eleições é desenvolvido pelas equipes do TSE. A operação desses sistemas – ou seja, a gestão de todo o processo eleitoral – é realizada exclusivamente por servidores do Tribunal Superior Eleitoral e dos Tribunais Regionais Eleitorais, não sendo delegado, em hipótese alguma, a empresas contratadas.</p>' +

			'<span class="tags">Tags: Quem fabrica as urnas, quem faz as urnas, quem produz as urnas, quem confecciona as urnas, quem monta as urnas</span>'
	},
	pergunta_seguranca_19: {
		sigla: 'pergunta_seguranca_19',
		titulo: '19. Como ocorre a distribuição das urnas antes das eleições?',
		resposta: '<p>Depois de embaladas uma a uma e defi­nido o local de entrega, elas recebem a identifi­cação da seção para onde serão levadas. Durante a carga da urna, é gerada a Tabela de Correspondência. A tabela de correspondência é um instrumento de segurança do processo eleitoral. Com ela os resultados recebidos somente são processados se houver uma correspondência anterior entre uma urna específica e a seção para a qual foi preparada. Assim, se chegar um resultado de outra urna que não a esperada, o resultado gera uma pendência e somente o juiz eleitoral pode tratá-lo. A tabela de correspondência é um produto da urna para cada eleição.</p>' +
			'<p>Quando a urna já está pronta para a votação, ela recebe um lacre de segurança fabricado pela Casa da Moeda, o qual evidencia qualquer tentativa de violação.</p>' +
			'<p>Em seguida, passam pela confirmação de leitura de patrimônio do TRE a que pertencem. A partir daí, as urnas ­ficam sob a responsabilidade do Regional.</p>' +
			'<p>Às vésperas das eleições, as urnas são distribuídas. Para chegarem aos lugares de difícil acesso, a Justiça Eleitoral conta com o apoio da Marinha e da Aeronáutica ou contrata empresas especializadas em transporte, para que tanto as urnas quanto os kits de transmissão de dados via satélite cheguem da forma mais segura. Muitas delas são transportadas em helicópteros, aviões de diversos tipos, em barcos e até em canoas. Há trechos em que as condições são tão extremas que o jeito é terminar de levar a urna a pé.</p>' +
			'<p>É importante salientar que, mesmo que a urna caia em mãos impróprias neste caminho, não será possível alterar nenhum software. Cada urna eletrônica dispõe de um hardware criptográfico que lhe confere uma identidade individual, assegurando que as informações dela advindas sejam autênticas e com garantia de origem. Além disso, esse hardware também garante que a urna executará somente sistemas oficiais e assinados pela Justiça Eleitoral.</p>' +

			'<span class="tags">Tags: Como as urnas são distribuídas, como as urnas são divididas, como as urnas são levadas, como as urnas são levadas</span>'
	},
	pergunta_seguranca_20: {
		sigla: 'pergunta_seguranca_20',
		titulo: '20. Como é feita a transmissão dos dados da urna após a eleição?',
		resposta: '<p>Todos os votos são registrados no Registro Digital do Voto – RDV. O registro digital do voto, ou arquivo de votos, foi criado em 2003 em substituição ao voto impresso, o que possibilitou a recuperação dos votos para recontagem eletrônica a qualquer tempo, além de acrescentar segurança e transparência ao processo eleitoral. Afinal, o registro digital do voto diminui o contato humano com o voto de cada eleitor. O RDV corresponde, no voto eletrônico, ao conteúdo de uma urna de lona em voto manual. Consiste na inserção, de forma aleatória, do voto de cada eleitor, assinado digitalmente pela urna eletrônica, em uma tabela de tamanho igual à da quantidade de eleitores da seção eleitoral.  A assinatura digital – obtida mediante a aplicação de sistema de criptografia baseada em tecnologia de chaves assimétricas – garante a identidade e autenticidade da urna registradora daquele RDV. Não há possibilidade de identificar o eleitor, uma vez que os votos, à medida que vão sendo registrados, são depositados aleatoriamente na urna eletrônica, impedindo qualquer vinculação entre o voto e o eleitor. O arquivo é assinado digitalmente e possui cópia de segurança na urna.</p>' +
			'<p>A urnas emitem também o Boletins de Urna – BUs, documento que informa o resultado da apuração daquela seção. O BU é usado para totalização dos resultados e pode ser usado para eventual verificação da contagem. Às 17h o presidente da seção eleitoral encerra a votação (inserindo o código de encerramento) e emite o BU. O documento, que é impresso em cinco vias, traz a identificação da seção eleitoral, da urna eletrônica, o número de eleitores que votaram naquela seção e o resultado dos votos por candidato e legenda. Todos os boletins são assinados pelo presidente da seção e por representantes dos partidos políticos presentes. A primeira via do BU é afixada em local visível na seção para dar publicidade ao resultado. As três vias seguintes são encaminhadas, juntamente com a ata da seção, ao cartório eleitoral. A última é entregue aos representantes dos partidos políticos presentes. Novas cópias podem ser impressas, caso necessário. Os BUs também são assinados digitalmente e criptografados.</p>' +
			'<p>BU na Web - Todos os Boletins de Urna emitidos durante o pleito também podem ser acessados, posteriormente, no portal do Tribunal Superior Eleitoral (TSE). Por meio do sistema “Boletim de urna na web”, os interessados podem obter o documento realizando pesquisas por estado, município, zona eleitoral e seção correspondente.  Selecionado o parâmetro desejado, os cidadãos podem consultar ainda informações sobre o quantitativo de comparecimentos e abstenções na seção eleitoral. Também está disponível para consulta o número de votos que cada candidato obteve em uma seção específica, além dos votos dados a partidos, brancos e nulos.</p>' +
			'<p>Depois de emitir o BU, o mesário grava os dados da urna eletrônica em uma espécie de pen drive que já é acoplado ao equipamento e leva o nome de Memória de Resultado. Na Memória de Resultado, encontram-se vários arquivos importantes, tais como o Boletim de Urna (BU), Registro Digital de Voto (RDV), Relatório de eleitores faltosos e que justificaram o voto, o Log da Urna (que tem por finalidade exibir os registros de eventos dos softwares da urna eletrônica; os arquivos de log podem ser solicitados pelos partidos políticos e pelas coligações aos tribunais regionais eleitorais) e a imagem do BU que foi impresso pelo mesário. Todos os arquivos são assinados digitalmente, o que torna possível a identificação da alteração de algum arquivo.</p>' +
			'<p>A Memória de Resultado é encaminhada a um Ponto de Transmissão, que corresponde a um cartório eleitoral. Nesse Ponto de Transmissão, encontra-se uma máquina segura que possui um sistema específico da Justiça Eleitoral capaz de transmitir os dados da Memória de Resultado para o TER. </p>' +
			'<p>Além dessa rede específica, a Justiça Eleitoral desenvolveu o JE Connect, um sistema de informação que possibilita a transmissão do resultado das eleições a partir de qualquer computador conectado à Internet, usando uma Virtual Private Network (VPN). Dessa forma qualquer dispositivo com acesso à internet poderá transmitir os relatórios da Memória de Resultado para o TER. A segurança da informação será garantida pela utilização do sistema operacional específico, da criptografia, de senha exclusiva e da VPN; que consiste em uma rede privada segura que existe dentro da rede pública da Internet.</p>' +
			'<p>Quando chegam ao TER, os votos, antes de passarem para o processo de Totalização, passam pela Validação. Nesse momento, as assinaturas digitais são verificadas. Caso não haja correlação, os sistemas da Justiça Eleitoral identificam o erro e classificam o arquivo em “rejeitado”. É nesse momento também que a tabela de correspondência é analisada: espera-se que um código específico da urna de cada seção eleitoral. Se o código não corresponder, o sistema classifica o arquivo como “pendência”. Isso impede que a urna de uma seção seja trocada. As pendências são analisadas por um juiz eleitoral.</p>' +
			'<p>Após a validação dos arquivos, os votos são encaminhados para Totalização, momento em que os votos são contados e aplicam-se as regras eleitorais.</p>' +

			'<span class="tags">Tags: Difusão dos dados, divulgação dos dados, propagação dos dados, transporte de dados</span>'
	},


}

// MONTANDO AS SECOES

function montar_unidades() {

	for (x in perguntas) {

		pergunta = '<div class="card-header">' +
			'<h3 data-toggle="collapse" data-target="#' + perguntas[x].sigla + '">' +
			perguntas[x].titulo +
			'</h3>' +
			'</div>' +
			'<div id="' + perguntas[x].sigla + '" class="collapse">' +
			'<div class="card-body">' +
			perguntas[x].resposta +
			'</div>' +
			'</div>';


		str1 = "#estrutura_";
		str2 = ".estrutura_";

		$(sigla = str1.concat(perguntas[x].sigla.toLowerCase())).prepend(pergunta);

		str1 = "#estrutura_";

		$(sigla2 = str2.concat(perguntas[x].sigla.toLowerCase())).prepend(pergunta);

	}
}

montar_unidades();




// Modal Estados

var x;
var i = 1;
var estados = {


	AC: {
		sigla: 'AC',
		nome: 'ACRE',
		texto: '<p><a href="http://www.tre-ac.jus.br/eleitor/biometria-2019" target="_blank">Confira se a biometria é obrigatória no seu município.</a></p><p>Não é necessário agendar atendimento.</p><p><a href="http://www.tre-ac.jus.br/eleitor/biometria-2019" target="_blank">Outras informações sobre a biometria no AC.</a></p>',
	},

	AL: {
		sigla: 'AL',
		nome: 'ALAGOAS',
		texto: '<p>100% biometrizado</p>',
	},


	AP: {
		sigla: 'AP',
		nome: 'AMAPÁ',
		texto: '<p>100% biometrizado</p>',
	},

	AM: {
		sigla: 'AM',
		nome: 'AMAZONAS',
		texto: '<p><a href="http://www.tre-am.jus.br/eleicoes/biometria-e-urna-eletronica/revisao-biometrica-interior-do-amazonas" target="_blank">Confira se a biometria é obrigatória no seu município.</a></p><p>Não é necessário agendar atendimento.</p><p><a href="http://www.tre-am.jus.br/" target="_blank">Outras informações sobre a biometria no AM.</a></p>'
	},

	BA: {
		sigla: 'BA',
		nome: 'BAHIA',
		texto: '<p><a href="http://www.tre-ba.jus.br/eleitor/recadastramento-biometrico/recadastramento-biometrico" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a></p><p><a href="http://aplicacoes4.tre-ba.jus.br/agendamento/publico/index.jsp" target="_blank">Agendar atendimento</a></p><p><a href="http://www.tre-ba.jus.br/" target="_blank">Outras informações sobre a biometria na BA</a></p>',
	},
	CE: {
		sigla: 'CE',
		nome: 'CEARÁ',
		texto: '<p><a href="http://www.tre-ce.jus.br/eleitor/biometria-no-ceara/biometria-no-ceara" target="_blank">Veja aqui se a biometria é obrigatória no seu município.</a></p><p>Pode ser agendado o atendimento, mas não é obrigatório. Para agendar <a href="http://www.tre-ce.jus.br/eleitor/agendamento-biometria" target="_blank">clique aqui.</a></p><p><a href="http://www.tre-ce.jus.br/eleitor/biometria-no-ceara/biometria-no-ceara" target="_blank">Outras informações sobre a biometria no CE.</a></p>',
	},
	DF: {
		sigla: 'DF',
		nome: 'DISTRITO FEDERAL',
		texto: '<p>100% biometrizado</p>',
	},
	ES: {
		sigla: 'ES',
		nome: 'ESPIRÍTO SANTO',
		texto: '<p><a href="http://www.tse.jus.br/eleitor/biometria/biometria-situacao-por-municipio" target="_blank">Veja aqui se a biometria é obrigatória no seu município.</a></p><p></p><p>Agendar atendimento: Não precisa.</p>',
	},
	GO: {
		sigla: 'GO',
		nome: 'GOIÁS',
		texto: '<p>100% biometrizado</p>',
	},
	MA: {
		sigla: 'MA',
		nome: 'MARANHÃO',
		texto: '<p><a href="http://www.tre-ma.jus.br/eleitor/recadastramento-eleitoral-biometrico/municipios-com-biometria-em-andamento/" target="_blank">Confira se a biometria é obrigatória no seu município.</a></p><p>Agendar atendimento: Não precisa.</p><p><a href="http://www.tre-ma.jus.br/eleitor/recadastramento-eleitoral-biometrico/recadastramento-eleitoral-biometrico" target="_blank">Outras informações sobre a biometria no MA</a> ou pelo telefone 0800 098 5000.</p>',
	},
	MT: {
		sigla: 'MT',
		nome: 'MATO GROSSO',
		texto: '<p><a href="http://www.tre-mt.jus.br/eleitor/biometria" target="_blank">Veja aqui se a biometria é obrigatória no seu município.</a></p><p>Agendar atendimento: Não precisa</p><p><a href="http://www.tre-mt.jus.br/eleitor/biometria" target="_blank">Outras informações</a></p>',
	},
	MS: {
		sigla: 'MS',
		nome: 'MATO GROSSO DO SUL',
		texto: '<p><a href="http://www.tse.jus.br/eleitor/biometria/biometria-atual-uf" target="_blank">Informações.</a></p>',
	},
	MG: {
		sigla: 'MG',
		nome: 'MINAS GERAIS',
		texto: '<p><a href="http://www.tre-mg.jus.br/eleitor/biometria" target="_blank">Veja aqui se a biometria é obrigatória no seu município.</a></p><p>Agendar atendimento:  Pode ser agendado, mas não é obrigatório. Para agendar <a href="http://www.tre-mg.jus.br/eleitor/agendamento" target="_blank">acesse</a> ou ligue para o Disque-Eleitor (148).</p><p><a href="http://www.tre-mg.jus.br/eleitor/biometria" target="_blank">Outras informações sobre a biometria em MG.</a></p>',
	},
	PA: {
		sigla: 'PA',
		nome: 'PARÁ',
		texto: '<p><a href="http://www.tse.jus.br/eleitor/biometria/biometria-situacao-por-municipio" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a>.</p><p>Agendar atendimento:  Pode ser agendado, mas não é obrigatório. Para agendar <a href="http://www.tre-pa.jus.br/eleitor/recadastramento-biometrico/atendimento/agendamento-de-atendimento" target="_blank">acesse</a>. Obs: O agendamento não está disponível para todos os municípios.</p><p><a href="http://www.tre-pa.jus.br/eleitor/recadastramento-biometrico/biometria" target="_blank">Outras informações sobre a biometria no PA</a>.</p>',
	},
	PB: {
		sigla: 'PB',
		nome: 'PARAÍBA',
		texto: '<p>100% biometrizado</p>',
	},
	PR: {
		sigla: 'PR',
		nome: 'PARANÁ',
		texto: '<p><a href="http://www.tre-pr.jus.br/eleitor/biometria/municipios-com-biometria" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a> ou ligue para a Ouvidoria do TRE-PR: (41) 3330-8474 e (41) 3330-8844 (das 12h às 19h).</p><p>Agendar atendimento:  Pode ser agendado, mas, não é obrigatório. Para agendar <a href="https://apps.tre-pr.jus.br/agendamento/publico/index.jsp" target="_blank">acesse</a>.</p><p><a href="http://www.tre-pr.jus.br/eleitor/biometria/biometria-no-parana" target="_blank">Outras informações sobre a biometria no PR</a> ou pelo telefone da Ouvidoria do TRE-PR: (41) 3330-8474 e (41) 3330-8844 (das 12h às 19h).</p>',
	},
	PE: {
		sigla: 'PE',
		nome: 'PERNAMBUCO',
		texto: '<p><a href="http://www.tre-pe.jus.br/eleitor/biometria-2018-2020" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a>.</p><p>Agendar atendimento:O agendamento é obrigatório. Para agendar seu atendimento <a href="http://www.tre-pe.jus.br/eleitor/solicitar-agendamento" target="_blank">acesse</a>.</p><p><a href="http://www.tre-pe.jus.br/eleitor/biometria-2018-2020" target="_blank">Outras informações sobre a biometria em PE</a>.</p>',
	},


	PI: {
		sigla: 'PI',
		nome: 'PIAUÍ',
		texto: '<p>PI – 100% biometrizado</p>',
	},

	RJ: {
		sigla: 'RJ',
		nome: 'RIO DE JANEIRO',
		texto: '<p><a href="http://www.tre-rj.jus.br/site/servicos_eleitor/index.jsp?vmenu=biometria/biometria.jsp&id=147054&migalha=Cadastramento%20obrigat%F3rio%20X%20N%E3o%20Obrigat%F3rio&vmenu_aux=recadastramento" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a></p><p><a href="http://www.tre-rj.jus.br/agendamento/publico/principal.do" target="_blank">Agendar atendimento</a></p><p><a href="http://www.tre-rj.jus.br/site/servicos_eleitor/index.jsp?vmenu=biometria/principal.html&vmenu_aux=recadastramento<http://www.tre-rs.jus.br/eleitor/recadastramento-biometrico" target="_blank">Outras informações sobre a biometria no RJ</a></p>',
	},
	RN: {
		sigla: 'RN',
		nome: 'RIO GRANDE DO NORTE',
		texto: '<p>100% biometrizado</p>',
	},
	RS: {
		sigla: 'RS',
		nome: 'RIO GRANDE DO SUL',
		texto: '<p><a href="http://www.tse.jus.br/eleitor/biometria/biometria-situacao-por-municipio" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a>.</p><p>Agendar atendimento: Pode ser agendado, mas, não é obrigatório. Para agendar <a href="http://www.tre-rs.jus.br/eleitor/agendamento-de-atendimento/agendamento-de-atendimento" target="_blank">acesse</a>.</p><p><a href="http://www.tre-rs.jus.br/eleitor/recadastramento-biometrico" target="_blank">Outras informações sobre a biometria no RS</a>.</p>',
	},
	RO: {
		sigla: 'RO',
		nome: 'RONDÔNIA',
		texto: '<p><a href="http://www.tre-ro.jus.br/eleicoes/biometria-2019" target="_blank">Veja aqui se a biometria é obrigatória no seu município.</a></p><p>Agendar atendimento:  <br>Não precisa.</p><p>Outras informações sobre a biometria em RO:<br> 0800-1480148</p>',
	},
	RR: {
		sigla: 'RR',
		nome: 'RORAIMA',
		texto: '<p>100% biometrizado</p>',
	},

	SC: {
		sigla: 'SC',
		nome: 'SANTA CATARINA',
		texto: '<p><a href="http://www.tre-sc.jus.br/site/eleitores/cadastramento-biometrico/estatistica/index.html" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a>.</p><p>Agendar atendimento: O agendamento é obrigatório. Para agendar <a href="http://www.tre-sc.jus.br/site/eleitores/cadastramento-biometrico/informacoes-basicas/index.html" target="_blank">acesse</a>.</p><p><a href="http://www.tre-sc.jus.br/site/eleitores/cadastramento-biometrico/inicio/index.html" target="_blank">Outras informações sobre a biometria em SC</a></p>',
	},
	SP: {
		sigla: 'SP',
		nome: 'SÃO PAULO',
		texto: '<p><a href="http://www.tre-sp.jus.br/eleitor/identificacao-biometrica-1/mapa-da-biometria" target="_blank">Veja aqui se a biometria é obrigatória no seu município</a>.</p><p>Agendar atendimento: O agendamento é obrigatório. Para agendar <a href="http://www.tre-sp.jus.br/eleitor/agendamento-titulo-eleitoral-3" target="_blank">acesse</a>.</p><p><a href="http://www.tre-sp.jus.br/eleitor/identificacao-biometrica-1/identificacao-biometrica" target="_blank">Outras informações sobre a biometria em SP</a>.</p>',
	},
	SE: {
		sigla: 'SE',
		nome: 'SERGIPE',
		texto: '<p>100% biometrizado</p>',
	},
	TO: {
		sigla: 'TO',
		nome: 'TOCANTINS',
		texto: '<p>100% biometrizado</p>',
	},

}

// MONTANDO AS SECOES

function montar_modal_estados() {
	tudo = "";
	for (x in estados) {

		modal = '<div class="modal fade" id="Mapa_' + estados[x].sigla + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog modal-dialog-centered" role = "document">' +
			'<div class="modal-content">' +
			'<div class="container">' +
			'<div class="modal-header servicos__modal_head">' +
			'<h5 class="servicos__modal_titulo">' + estados[x].nome + '</h5>' +
			'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
			'<span aria-hidden="true">×</span>' +
			'</button>' +
			'</div>' +
			'<div class="modal-body">' +
			'<div class="nav flex-sm-column flex-row">' +
			estados[x].texto +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>';
		$(tudo = modal.concat(tudo));
	}
	str1 = "#uf";

	$(sigla = str1.concat()).prepend(tudo);



}


montar_modal_estados();

// $(document).ready(function () {
//     $(".titulo-box").on('click', function(){
// 		if($(this).hasClass('aberto')){
// 			$(this).removeClass("aberto");
// 			$(this).next(".box-orientacoes").removeClass("aberto");
// 		}
// 		else{
// 			$(".titulo-box").removeClass("aberto");
// 			$(".box-orientacoes").removeClass("aberto");
// 			$(this).addClass("aberto");
// 			$(this).next(".box-orientacoes").addClass("aberto");
// 		}

        
//     });
// });