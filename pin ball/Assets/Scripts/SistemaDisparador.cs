// Autor: GhaleonKoizumi (Heiner Alberto Aguilar Zuñiga)

using UnityEngine;
using System.Collections;

//Este script es una clase que representa un sistema disparador de algun tipo de proyectil
//Simula tanto el comportamiento de disparar como el de cargar municiones

public class SistemaDisparador : MonoBehaviour {
	
	public string teclaDisparo = "p";
	private GameObject bola;
	public AudioClip sonidoDisparo;
	public AudioClip sonidoCargar;
	public bool puedeDisparar;
	private bool potencia = false;
	private float potenciaExtra = 0.0f;
	private float temporal = 0.0f;

	void Start () {
		//cargarProyectil();
		puedeDisparar = false;
		bola = GameObject.Find ("Pelota");
	}
	
	/*
	 *Realiza: Verifica las posibles teclas que activan una accion del sistema disparador y devuelve a su posicion original el disparador
	 */
	void Update () {
		if ((Input.GetKeyDown(teclaDisparo)  || Input.GetKey(teclaDisparo)) && potenciaExtra <= 100) {
			if(puedeDisparar){
				potencia = true;
				potenciaExtra += 1;
				temporal += 0.003f;
				transform.localPosition = new Vector3(-7.695636f,0.9940f,transform.localPosition.z+0.04f);
			}
		}else{
				if(potencia){
					if (sonidoDisparo){
						audio.PlayOneShot (sonidoDisparo);
					}
				    bola.rigidbody.velocity = new Vector3(0,0,-0.5f*potenciaExtra);
					potencia = false;
					temporal = 0.0f;
				    puedeDisparar = false;
					potenciaExtra = 0;
				}
					
		}
		if (transform.localPosition.z > -1.590329 && !((Input.GetKeyDown(teclaDisparo)  || Input.GetKey(teclaDisparo)))) {
			transform.localPosition = new Vector3(-7.695636f,0.9940f,transform.localPosition.z-0.1f);
		}
	}


	/*
	 * Detecta si tiene un objeto que disparar
	 */
	void OnCollisionEnter(Collision collision)
	{
		if(collision.gameObject.tag == "Pelota")
		{
			puedeDisparar = true;
		}
	}

}