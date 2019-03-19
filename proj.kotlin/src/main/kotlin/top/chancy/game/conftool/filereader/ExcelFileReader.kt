package top.chancy.game.conftool.filereader

import org.apache.poi.ss.usermodel.CellType
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import java.io.File

class ExcelFileReader : IFileReader {
    override fun read(file: File): Array<Array<String>> {
        val xssfWorkbook = XSSFWorkbook(file)
        val xssfSheet = xssfWorkbook.getSheetAt(0)
        val maxRow = xssfSheet.physicalNumberOfRows
        val maxColumn = xssfSheet.first().physicalNumberOfCells
        return Array(maxRow) { rowIndex ->
            val row = xssfSheet.getRow(rowIndex)
            Array(maxColumn) { columnIndex ->
                val cell = row.getCell(columnIndex)
                cell.cellType = CellType.STRING
                cell.stringCellValue
            }
        }
    }
}