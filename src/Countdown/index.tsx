import React, { forwardRef, useMemo } from 'react';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Countdown.module.scss';
import { getUnitLabel } from './constants';
import useCountdown from './hooks/useCountdown';
import clsx from 'clsx';
import type { CountdownProps } from './types';

const Countdown = forwardRef<HTMLDivElement, CountdownProps>((props, ref) => {
  const {
    date,
    showDay = true,
    showHour = true,
    showMinute = true,
    showSecond = true,
    type = 'default',
    itemClassName,
    rootClassName,
    valueClassName,
    labelClassName,
  } = props;

  const timeLeft = useCountdown({
    date,
    showDay,
    showHour,
    showMinute,
    showSecond,
  });

  const itemClassNames = clsx(
    s.item,
    itemClassName,
    type !== 'default' && s[type]
  );

  const valueClassNames = clsx(
    s.value,
    valueClassName,
    type !== 'default' && s[type]
  );

  const labelClassNames = clsx(
    s.label,
    labelClassName,
    type !== 'default' && s[type]
  );

  const format = useMemo(() => {
    if (type === 'withSeparator') return 'none';
    else if (type === 'default') return 'oneChar';
    else return 'full';
  }, [type]);

  return (
    <div className={clsx(s.root, rootClassName)} data-type={type} ref={ref}>
      {showDay && timeLeft.day !== undefined && (
        <div className={itemClassNames}>
          <div className={valueClassNames}>{timeLeft.day}</div>
          <div className={labelClassNames}>{getUnitLabel('day', format)}</div>
        </div>
      )}

      {showHour && timeLeft.hour !== undefined && (
        <>
          {type === 'withSeparator' && timeLeft.day !== undefined && (
            <span className={s.separator}>:</span>
          )}
          <div className={itemClassNames}>
            <div className={valueClassNames}>{timeLeft.hour}</div>
            <div className={labelClassNames}>
              {getUnitLabel('hour', format)}
            </div>
          </div>
        </>
      )}

      {showMinute && timeLeft.minute !== undefined && (
        <>
          {type === 'withSeparator' &&
            (timeLeft.day !== undefined || timeLeft.hour !== undefined) && (
              <span className={s.separator}>:</span>
            )}
          <div className={itemClassNames}>
            <div className={valueClassNames}>{timeLeft.minute}</div>
            <div className={labelClassNames}>
              {getUnitLabel('minute', format)}
            </div>
          </div>
        </>
      )}

      {showSecond && timeLeft.second !== undefined && (
        <>
          {type === 'withSeparator' &&
            (timeLeft.hour !== undefined || timeLeft.minute !== undefined) && (
              <span className={s.separator}>:</span>
            )}
          <div className={itemClassNames}>
            <div className={valueClassNames}>{timeLeft.second}</div>
            <div className={labelClassNames}>
              {getUnitLabel('second', format)}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

Countdown.displayName = 'Countdown';

export default Countdown;
export { type CountdownProps };
