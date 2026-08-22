class Personaje {
  constructor(nombre, clase, vida, dano, defensa, velocidad) {
    this.nombre = nombre;
    this.clase = clase;
    this.vida = vida;
    this.dano = dano;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  saludar() {
    console.log(`¡Hola! Soy ${this.nombre}, un ${this.clase}.`);
  }

  atacar() {
    console.log(`${this.nombre} ataca con sus puños infligiendo ${this.dano} de daño base.`);
    return this.dano;
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_armas, estamina) {
    super(nombre, "Guerrero", vida, dano, defensa, velocidad);
    this.array_de_armas = array_de_armas;  
    this.estamina = estamina;
  }

  atacar_con_arma() {
    const arma = this.array_de_armas[Math.floor(Math.random() * this.array_de_armas.length)];

    if (this.estamina >= arma.costoestamina) {
      this.estamina -= arma.costoestamina;
      console.log(`${this.nombre} ataca con ${arma.nombre} y consume ${arma.costoestamina} de estamina.`);
      return arma.dano; 
    } else {
      console.log(`${this.nombre} no tiene suficiente estamina para atacar con ${arma.nombre}.`);
      this.recargar_estamina();
      return 0;
    }
  }

  recargar_estamina() {
    this.estamina = Math.min(this.estamina + 20, 100);
    console.log(`${this.nombre} recarga su estamina y ahora tiene ${this.estamina}.`);
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_hechizos, mana) {
    super(nombre, "Mago", vida, dano, defensa, velocidad);
    this.array_de_hechizos = array_de_hechizos;
    this.mana = mana;
  }

  atacar_con_hechizo() {
    const hechizo = this.array_de_hechizos[Math.floor(Math.random() * this.array_de_hechizos.length)];

    if (this.mana >= hechizo.costomana) {
      this.mana -= hechizo.costomana;
      console.log(`${this.nombre} lanza ${hechizo.nombre} y consume ${hechizo.costomana} de maná.`);
      return hechizo.dano; 
    } else {
      console.log(`${this.nombre} no tiene suficiente maná para lanzar ${hechizo.nombre}.`);
      this.recargar_mana();
      return 0;
    }
  }

  recargar_mana() {
    this.mana = Math.min(this.mana + 20, 100);
    console.log(`${this.nombre} recarga su maná y ahora tiene ${this.mana}.`);
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_flechas, flechas) {
    super(nombre, "Arquero", vida, dano, defensa, velocidad);
    this.array_de_flechas = array_de_flechas;
    this.flechas = flechas;
  }

  atacar_con_flecha() {
    const flecha = this.array_de_flechas[Math.floor(Math.random() * this.array_de_flechas.length)];

    if (this.flechas >= flecha.costoflecha) {
      this.flechas -= flecha.costoflecha;
      console.log(`${this.nombre} dispara ${flecha.nombre} y consume ${flecha.costoflecha} flechas.`);
      return flecha.dano; 
    } else {
      console.log(`${this.nombre} no tiene suficientes flechas para disparar ${flecha.nombre}.`);
      this.recargar_flechas();
      return 0;
    }
  }

  recargar_flechas() {
    this.flechas = Math.min(this.flechas + 10, 30);
    console.log(`${this.nombre} recarga sus flechas y ahora tiene ${this.flechas}.`);
  }
}

class Clerigo extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_plegarias, meditacion) {
    super(nombre, "Clérigo", vida, dano, defensa, velocidad);
    this.array_de_plegarias = array_de_plegarias;
    this.meditacion = meditacion;
  }

  atacar_con_plegaria() {
    const plegaria = this.array_de_plegarias[Math.floor(Math.random() * this.array_de_plegarias.length)];

    if (this.meditacion >= plegaria.costomeditacion) {
      this.meditacion -= plegaria.costomeditacion;
      console.log(`${this.nombre} realiza ${plegaria.nombre} y consume ${plegaria.costomeditacion} de meditación.`);
      return plegaria.dano; 
    } else {
      console.log(`${this.nombre} no tiene suficiente meditación para realizar ${plegaria.nombre}.`);
      this.recargar_meditacion();
      return 0;
    }
  }

  recargar_meditacion() {
    this.meditacion = Math.min(this.meditacion + 10, 100);
    console.log(`${this.nombre} se pone a meditar y ahora tiene ${this.meditacion}.`);
  }
    
  curar() {
    const curacion = Math.floor(this.vida * 0.25);
    this.vida += curacion;
    console.log(`${this.nombre} se cura ${curacion} puntos de vida y ahora tiene ${this.vida} de vida.`);
  }
}

class Picaro extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_dagas, daga) {
    super(nombre, "Pícaro", vida, dano, defensa, velocidad);
    this.array_de_dagas = array_de_dagas;
    this.daga = daga;
  }

  atacar_con_daga() {
    const daga = this.array_de_dagas[Math.floor(Math.random() * this.array_de_dagas.length)];

    if (this.daga >= daga.costodaga) {
      this.daga -= daga.costodaga;
      console.log(`${this.nombre} ataca con ${daga.nombre} y consume ${daga.costodaga} dagas.`);
      return daga.dano; 
    } else {
      console.log(`${this.nombre} no tiene suficientes dagas para usar ${daga.nombre}.`);
      this.recargar_dagas();
      return 0;
    }
  }

  recargar_dagas() {
    this.daga = Math.min(this.daga + 10, 30);
    console.log(`${this.nombre} recarga sus dagas y ahora tiene ${this.daga}.`);
  }
}

// INSTANCIAS DE PERSONAJES
const guerrero = new Guerrero("quirrel", 1500, 120, 50, 5, [
  { nombre: "Espada larga", costoestamina: 25, dano: 180},
  { nombre: "Mazo", costoestamina: 35, dano: 210},
  { nombre: "hacha doble", costoestamina: 45, dano: 270}
], 100);

const guerrero2 = new Guerrero("Zote el todo poderoso", 1500, 120, 50, 5, [
  { nombre: "espada", costoestamina: 25, dano: 180},
  { nombre: "lanza", costoestamina: 35, dano: 210},
  { nombre: "hacha de combate", costoestamina: 45, dano: 270}
], 100);

const mago = new Mago("doctor strange", 750, 100, 15, 4, [
  { nombre: "baculo de fuego", costomana: 25, dano: 200 },
  { nombre: "hechizo de hielo", costomana: 30, dano: 240 },
  { nombre: "orbe arcana", costomana: 50, dano: 440 }
], 100);

const mago2 = new Mago("Merlin", 750, 100, 15, 4, [
  { nombre: "bola de fuego", costomana: 35, dano: 200 },
  { nombre: "hechizo de veneno", costomana: 15, dano: 240 },
  { nombre: "centro de rayos", costomana: 60, dano: 440 }
], 100);

const arquero = new Arquero("Hawkeye", 850, 110, 20, 8, [
  { nombre: "flecha", costoflecha: 1, dano: 180 },
  { nombre: "flecha de fuego", costoflecha: 3, dano: 250 },
  { nombre: "flecha explosiva", costoflecha: 5, dano: 400 }
], 30);

const clerigo = new Clerigo("Curandera", 1300, 95, 40, 6, [
  { nombre: "plegaria de sanacion", costomeditacion: 20, dano: 150},
  { nombre: "plegaria de proteccion", costomeditacion: 35, dano: 200},
  { nombre: "plegaria de bendicion", costomeditacion: 45, dano: 240}
], 100);

const picaro = new Picaro("Shadow", 650, 105, 10, 10, [
  { nombre: "daga de sombra", costodaga: 1, dano: 140},
  { nombre: "daga de veneno", costodaga: 3, dano: 200},
  { nombre: "daga de fuego", costodaga: 5, dano: 250}
], 30); 

// ARREGLO DE PARTICIPANTES Y EJECUCIÓN
const participantes = [guerrero, guerrero2, mago, mago2, arquero, clerigo, picaro];

function iniciar_juego_gran_arena(listaPersonajes) {
  console.log("=== PRESENTACIÓN DE LOS COMBATIENTES ===");
  listaPersonajes.forEach(p => p.saludar());
  console.log("========================================\n");

  let jugadosVivos = [...listaPersonajes];
  let numeroRonda = 1;

  while (jugadosVivos.length > 1) {
    console.log(`\n--- RONDA ${numeroRonda} ---`);

    const ordenTurnos = jugadosVivos
      .map(p => ({
        personaje: p,
        iniciativa: (Math.floor(Math.random() * p.velocidad) + 1)
      }))
      .sort((a, b) => b.iniciativa - a.iniciativa);

    console.log("Orden de ataque esta ronda:");
    ordenTurnos.forEach((item, index) => {
      console.log(` ${index + 1}. ${item.personaje.nombre} (Tirada: ${item.iniciativa})`);
    });

    for (const turno of ordenTurnos) {
      const atacante = turno.personaje;

      if (atacante.vida <= 0) continue;

      const posiblesObjetivos = jugadosVivos.filter(p => p !== atacante && p.vida > 0);
      if (posiblesObjetivos.length === 0) break;

      const defensor = posiblesObjetivos[Math.floor(Math.random() * posiblesObjetivos.length)];

      console.log(`\n> Turno de ${atacante.nombre} (Clase: ${atacante.clase}):`);

      let danoAtacante = 0;
      if (Math.random() < 0.33) {
        danoAtacante = atacante.atacar();
      } else {
        if (atacante.atacar_con_arma) danoAtacante = atacante.atacar_con_arma();
        else if (atacante.atacar_con_hechizo) danoAtacante = atacante.atacar_con_hechizo();
        else if (atacante.atacar_con_flecha) danoAtacante = atacante.atacar_con_flecha();
        else if (atacante.atacar_con_plegaria) danoAtacante = atacante.atacar_con_plegaria();
        else if (atacante.atacar_con_daga) danoAtacante = atacante.atacar_con_daga();
        else danoAtacante = atacante.atacar();
      }

      if (danoAtacante > 0) {
        console.log(`${atacante.nombre} intenta atacar a ${defensor.nombre}...`);

        const tiradaDefensa = Math.floor(Math.random() * defensor.defensa) + 1;
        console.log(`${defensor.nombre} genera ${tiradaDefensa} de defensa (Daño entrante: ${danoAtacante}).`);

        if (tiradaDefensa > danoAtacante) {
          console.log(`¡El ataque ha FALLADO! La defensa de ${defensor.nombre} superó el daño.`);
        } else {
          console.log(`¡Ataque EXITOSO! ${defensor.nombre} recibe ${danoAtacante} puntos de daño.`);
          defensor.vida -= danoAtacante;

          if (defensor.vida <= 0) {
            defensor.vida = 0;
            console.log(`¡${defensor.nombre} ha muerto y queda eliminado del juego!`);
          } else {
            console.log(`Vida restante de ${defensor.nombre}: ${defensor.vida}`);
          }
        }
      }
    }

    jugadosVivos = jugadosVivos.filter(p => p.vida > 0);
    numeroRonda++;
  }

  console.log("\n========================================");
  console.log(`¡LA BATALLA HA CONCLUIDO!`);
  console.log(`¡${jugadosVivos[0].nombre} es el GANADOR de la arena!`);
  console.log("========================================");
}

iniciar_juego_gran_arena(participantes);