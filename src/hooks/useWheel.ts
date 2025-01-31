import { UseWheelConfig, Handler, EventTypes } from '../types'
import { buildWheelConfig } from './buildConfig'
import useRecognizers from './useRecognizers'
import { RecognizersMap } from '../recognizers/Recognizer'
import { WheelRecognizer } from '../recognizers/WheelRecognizer'

/**
 * Wheel hook.
 *
 * @param handler - the function fired every time the wheel gesture updates
 * @param the config object including generic options and wheel options
 */
export function useWheel<K = EventTypes['wheel']>(handler: Handler<'wheel', K>, config: UseWheelConfig | {} = {}) {
  RecognizersMap.set('wheel', WheelRecognizer)

  return useRecognizers<UseWheelConfig>({ wheel: handler }, buildWheelConfig(config))
}
