import type { PaymentEntry } from '@'
import dayjs from 'dayjs'
import { Trans } from 'react-i18next'

import { useModuleTranslation } from '@lifeforge/localization'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  usePersonalization
} from '@lifeforge/ui'

import type { CalculatedPayment } from '@/utils/calculations'

function BreakdownTable({
  entry,
  calculations: {
    electricityBill,
    totalPayable,
    previousPrepayment,
    currentPrepayment,
    amountPaid
  }
}: {
  entry: PaymentEntry
  calculations: CalculatedPayment
}) {
  const { t, ns } = useModuleTranslation()
  const { language } = usePersonalization()

  return (
    <Table mt="md">
      <TableHeader>
        <TableRow>
          <TableHeaderCell align="left" width="100%" />
          <TableHeaderCell>RM</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody color={{ base: 'bg-500', dark: 'bg-400' }}>
        <TableRow>
          <TableCell>{t('paymentCard.baseRentalFee')}</TableCell>
          <TableCell nowrap align="right">
            <Text weight="medium">{entry.rental_fee.toFixed(2)}</Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            {t('paymentCard.electricityBillPayable', {
              used: entry.electricity_used,
              rate: entry.electricity_rate.toFixed(2)
            })}
          </TableCell>
          <TableCell nowrap align="right">
            <Text weight="medium">{electricityBill.toFixed(2)}</Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{t('paymentCard.fixedUtilityBill')}</TableCell>
          <TableCell nowrap align="right">
            <Text weight="medium">{entry.utility_bill.toFixed(2)}</Text>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Text weight="semibold">{t('paymentCard.totalPayable')}:</Text>
          </TableCell>
          <TableCell nowrap align="right" variant="total">
            <Text color={{ print: 'black' }} weight="semibold">
              {totalPayable.toFixed(2)}
            </Text>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>{t('paymentCard.paymentMade')}</TableCell>
          <TableCell nowrap align="right" color="green-600">
            <Text weight="medium">{amountPaid.toFixed(2)}</Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Trans i18nKey="paymentCard.lessTotalPayable" ns={ns} />
          </TableCell>
          <TableCell nowrap align="right">
            <Text weight="medium">({totalPayable.toFixed(2)})</Text>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Text weight="semibold">
              {t('paymentCard.paymentExcessShortfall')}:
            </Text>
          </TableCell>
          <TableCell
            nowrap
            align="right"
            color={amountPaid - totalPayable >= 0 ? 'green-600' : 'red-600'}
          >
            <Text weight="medium">
              {amountPaid - totalPayable >= 0
                ? (amountPaid - totalPayable).toFixed(2)
                : `(${(totalPayable - amountPaid).toFixed(2)})`}
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            {t('paymentCard.prepaymentCarriedDown', {
              month: dayjs()
                .month(entry.month - 2)
                .year(entry.month === 1 ? entry.year - 1 : entry.year)
                .locale(language)
                .format(language.startsWith('zh') ? 'YYYY年MM月' : 'MMM YYYY')
            })}
          </TableCell>
          <TableCell nowrap align="right">
            <Text weight="medium">{previousPrepayment.toFixed(2)}</Text>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Text weight="semibold">
              {t('paymentCard.prepaymentBroughtDown', {
                month: dayjs()
                  .month(entry.month)
                  .year(entry.month === 12 ? entry.year + 1 : entry.year)
                  .locale(language)
                  .format(language.startsWith('zh') ? 'YYYY年MM月' : 'MMM YYYY')
              })}
            </Text>
          </TableCell>
          <TableCell nowrap align="right" variant="total">
            <Text color={{ print: 'black' }} weight="semibold">
              {currentPrepayment >= 0
                ? currentPrepayment.toFixed(2)
                : `(${Math.abs(currentPrepayment).toFixed(2)})`}
            </Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default BreakdownTable
