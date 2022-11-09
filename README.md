# Website SVNULL

Website van de studievereniging NULL.
Gezien een private wiki geld kost worden hier specificaties etc in gezet.

***
</br>
</br>



### Hosting en Domain
Voor hosting wordt er gebruik gemaakt van Netlify. De domain name is gekocht via Namecheap. Inloggegevens voor beide staan in het worddocument in de SV NULL teamsomgeving.

***
</br>



### Wachtwoord ledenpagina
Voor het wachtwoord op de ledenpagina heb ik nog wat leuks toegevoegd. Ceasar cipher encryption.
</br>
In plaats van het wachtwoord dus straight in de code te zetten is er wat extra’s bij. Dit helpt ofc niet tegen mensen die echt de moeite willen doen, maar hij staat nu in ieder geval niet zomaar los in de code.
</br>
Ik heb ceasar cipher encryption gebruikt met 13 verplaatsingen, wat best easy is. https://cryptii.com/pipes/caesar-cipher 
Vul hierin bvb “helloworld” in met 13 verplaatsingen en dan krijg je “uryybjbeyq” terug.
</br>
Voor een nieuw wachtwoord moet je hem dus door die site daarboven gooien met 13 verplaatsingen (de wachtwoord functie werkt nu alleen voor 13 verplaatsingen).
</br>

![image](https://user-images.githubusercontent.com/113634263/197282590-5427b25e-ecc8-4bd0-a547-abf496da41e0.png)

Hier staat aangegeven waar het wachtwoord in de code staat. Als je een nieuw wachtwoord wilt gebruiken, vul hem dan hierzo in (in de file ```main.js```). 😊
</br></br>
De code ziet er onleesbaar uit omdat ik hem door een obfuscator heb gehaald https://www.obfuscator.io/
Simpel gezegd verandert dit leesbare javascript code naar hele gare code, hiermee zal iemand die naar de code kijkt dus niet zomaar kunnen zien hoe de wachtwoord functie in elkaar zit.
(tuurlijk is het niet 100% veilig, maar iemand moet veel moeite doen om nu het wachtwoord uit de website files te achterhalen)

Originele javascript wachtwoord code (dus voordat dit door de obfuscator is gehaald):
```// password
function pswd(form) {
	var somthing = idk("uryybjbeyq")
	if (form.pass.value==somthing) { 

		var sessionTimeout = 1;
		var loginDuration = new Date();
		loginDuration.setTime(loginDuration.getTime()+(sessionTimeout*60*60*1000));
		document.cookie = "CrewCentreSession=Valid; "+loginDuration.toGMTString()+"; path=/";

	location="https://svnull.nl/ledenpagina-protected"; 
	} 
	else { alert("Wrong Password") } 
}

  function idk (str) {
    var plainText = "";
    for(var i = 0; i < str.length; i++) {
        var encryptedCharacter = str.charCodeAt(i);
        if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            plainText += String.fromCharCode((encryptedCharacter-97 - 13 + 26) %26 + 97 );
        } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            plainText += String.fromCharCode((encryptedCharacter-65 - 13 + 26) %26 + 65 );
        } else {
            plainText += String.fromCharCode(plainCharacter);
        }
    }
    return plainText;
}
```




***
</br>

### Volgend punt
Volgend punt
