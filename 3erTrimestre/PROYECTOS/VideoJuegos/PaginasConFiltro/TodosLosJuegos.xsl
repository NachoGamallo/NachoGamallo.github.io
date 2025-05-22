<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <link rel="stylesheet" href="../style.css"/>
            <body>
                <h3>COLECCION DE VIDEOJUEGOS</h3>
                <table>
                    <tr>
                        <th>TITULO</th>
                        <th>GENERO</th>
                        <th>DESCRIPCION</th>
                        <th>PRECIO</th>
                        <th>NOTA (0/5)</th>
                        <th>IMAGENES</th> 
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego">
                        <tr>
                            <th><xsl:value-of select="titulo"/></th>
                            <th><xsl:value-of select="genero"/></th>
                            <th><xsl:value-of select="descripcion"/></th>
                            <th><xsl:value-of select="precio"/></th>
                            <th><xsl:value-of select="valorOpiniones"/></th>
                            <th>
                                <img>
                                    <xsl:attribute name="src">
                                        <xsl:value-of select="imagenes"/>
                                    </xsl:attribute>
                                    <xsl:attribute name="alt">Imagenes de videojuegos.</xsl:attribute>
                                </img>
                            </th>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>