// Agregate Root -> Entidade principal ao qual as suas dependentes vão nascer
// Entidade principal dentro de um conjunto de Agregados
// Exemplo: Order -> OrderItems[] (Order - Root)

import { Entity } from './entity'

export abstract class AggregateRoot<Props> extends Entity<Props> {}
