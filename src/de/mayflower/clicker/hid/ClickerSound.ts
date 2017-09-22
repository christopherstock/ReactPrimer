
    /*****************************************************************************
    *   Plays the bg sound.
    *
    *   @author     Christopher Stock
    *   @version    1.0
    *****************************************************************************/
    export class ClickerSound
    {
        /*****************************************************************************
        *   Starts the bg sound.
        *****************************************************************************/
        public static startBgSound() : void
        {
            let bgSound:HTMLAudioElement = new Audio( "res/sound/gang-plank-galleon.mp3" );
            bgSound.play();
        }
    }
