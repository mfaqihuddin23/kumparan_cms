import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        'yellowcms': {
          100: '#FFD346', //rgba(255, 211, 70, 1)
        },
        'purplecms': {
          100: '#7C4F9F', //rgba(124, 79, 159, 1)
        },
      }
    }
  }
}
