<!DOCTYPE html>
<html lang="en">

<?php include 'template/head.php';?>

<div id="startBg" class="">

    <div class="wolkstartlinks">
        <img class="wolk1start" src="img/rwolk2.png" alt="wolk">
    </div>
    <div class="wolkstartrechts">
        <img class="wolk2start" src="img/rwolk3.png" alt="wolk">
    </div>

    <div class="blad">
        <img src="img/rblad.png" alt="een blaadje">
        <img src="img/rblad.png" alt="een blaadje">
        <img src="img/rblad.png" alt="een blaadje">
        <img src="img/rblad.png" alt="een blaadje">
    </div>

    <div class="terugStad">
        <a href="index.php">terug</a>
    </div>

    <div class="titel">
        <h1>Wat levert het je op?</h1>
        <img class="ExInknop" src="img/iconINF.svg" alt="info knopje">
        <img class="ExInknop" src="img/iconCL.svg" alt="info knopje" style="display: none">
        <div class="vergelijkingen">
            <img class="verill" id="izomer" src="img/rvergelijkingzomer.png" alt="vergelijking zomer" />
            <img class="verill" id="iwinter" src="img/rvergelijkingwinter.png" alt="vergelijking winter" style="display:none" />

            <div id="extraInfo">
                <h2>Wat doet het precies?</h2>
                <p>
                    De plaatsing van groen zorgt
                    onder
                    meer voor een betere isolatie, wat resulteert in koelere temperaturen in de zomermaanden en meer
                    warmte
                    in
                    koudere maanden (tot wel 5 graden). Het energieverbruik kan in de zomer tot 25% worden verminderd en
                    in
                    de
                    winter tot 10%. 
                    <br> 
                    <br>
                    Daarbij zorgt de aanwezigheid van groen ook voor een gezondere luchtkwaliteit,
                    creëert
                    het
                    een leefgebied en voedsel voor dieren, verbetert het waterbeheer in de stad. En dan tenslotte: de
                    aanwezigheid van groen in onze stedelijke omgeving bevordert onze verbondenheid met de natuur en kan
                    zo
                    leiden tot een beter menselijk welzijn.
                </p>
                <img id="illustratieondertekst"src="img/rrondjeillus.png" alt="illustartie huisje" style="width: 200px; height:200px;"/>
            </div>

            <div class="infoillu">
                <p class="ondertekst">Zomers zorgt de aanwezigheid van groen voor een koelere temperaturen dus hoeven er
                    minder
                    airco's aan. Klik hier om te zien wat de wintersituatie oplevert.
                </p>
                <p class="ondertekst" style="display: none">s' Winters is het, door een groene omgeving, warmer en hoeft
                    er minder gestookt te
                    worden. Klik hier om te zien wat de zomersituatie oplevert.
                </p>
                <button class="seizoenBtn" role="button">s' Winters</button>
            </div>
        </div>


    </div>
    <a href="stad.php">
        <div class="praatwolkje">
            <button class="naarStad" role="button">
                Kom en kijk wat jij kunt vergroenen!
            </button>
        </div>
    </a>


    <div class="bovenkantgebouwen"></div>
    <div class="wolkentop">
        <img class="wolktop" src="img/rwolk3.png" alt="toppen van flats">
    </div>

    <div class="socialmedia">
        <a href="#" class="instagram">
            <img src="img/iconLI.svg" alt="linkedin logo">
        </a>
        <a href="#" class="share">
            <img src="img/iconSH.svg" alt="share knop">
        </a>
        <a href="#" class="twitter">
            <img src="img/iconTW.svg" alt="twitter logo">
        </a>
    </div>

</div>

<?php include 'template/footer.php';?>

</html>