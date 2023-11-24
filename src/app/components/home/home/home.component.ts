import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno/aluno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  alunoNome!: String;
  saudacao: string;
  versiculoDoDia: string;

  constructor(
    private alunoService: AlunoService
  ) {
    this.saudacao = this.getSaudacao();
    this.versiculoDoDia = this.getVersiculoDoDia();
  }

  ngOnInit(): void {
    this.alunoService.getById().subscribe(
      (usuario) => {
        this.alunoNome = usuario.nome + ' ' + usuario.sobrenome;
      }
    )
  }

  getSaudacao(): string {
    const horaAtual = new Date().getHours();
    if (horaAtual < 12) {
      return 'Bom dia';
    } else if (horaAtual < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  }

  getVersiculoDoDia(): string {
    const versiculos = [
      "Tudo posso naquele que me fortalece. - Filipenses 4:13",
      "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. - Jeremias 29:11",
      "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas. - Provérbios 3:5-6",
      "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês. - 1 Pedro 5:7",
      "Peçam, e lhes será dado; busquem, e encontrarão; batam, e a porta lhes será aberta. - Mateus 7:7",
      "Eu vim para que tenham vida e a tenham plenamente. - João 10:10",
      "Estou convencido de que aquele que começou boa obra em vocês vai completá-la até o dia de Cristo Jesus. - Filipenses 1:6",
      "O Senhor é o meu pastor; de nada terei falta. - Salmos 23:1",
      "Porque para Deus nada é impossível. - Lucas 1:37",
      "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa deles, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará. - Deuteronômio 31:6",
      "A alegria do Senhor é a nossa força. - Neemias 8:10",
      "Mas os que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam. - Isaías 40:31",
      "Pois onde estiverem dois ou três reunidos em meu nome, ali estou eu no meio deles. - Mateus 18:20",
      "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso. - Mateus 11:28",
      "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos. - Hebreus 11:1",
      "Tudo o que pedirem em oração, creiam que já receberam, e assim será com vocês. - Marcos 11:24",
      "Eu sou a luz do mundo. Quem me segue nunca andará nas trevas, mas terá a luz da vida. - João 8:12",
      "Em paz me deito e logo adormeço, pois só tu, Senhor, me fazes viver em segurança. - Salmos 4:8",
      "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. - 1 Coríntios 13:4",
      "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de testar e aprovar a vontade de Deus — sua boa, agradável e perfeita vontade. - Romanos 12:2",
    ];
    return versiculos[Math.floor(Math.random() * versiculos.length)];
  }

}
