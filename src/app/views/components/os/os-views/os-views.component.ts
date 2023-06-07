import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OS } from 'src/app/models/OS';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-views',
  templateUrl: './os-views.component.html',
  styleUrls: ['./os-views.component.css']
})
export class OsViewsComponent implements OnInit {

  os: OS = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    prioridade: '',
    status: '',
  }

  constructor(private route: ActivatedRoute,
              private service: OsService,
              private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.os.id).subscribe(resposta => {
      this.os = resposta;
      this.findById();
    })
  }

  navigateToCancel(): void {
      this.router.navigate(['os'])
  }
}
