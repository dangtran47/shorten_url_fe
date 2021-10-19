import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import get from 'lodash/get'

import { getCurrentOrigin } from '../../utils'
import { fetchOriginalUrlRequest } from "../../actions"

const GetLinkPage = ({ originalUrl, fetchOriginalUrl }) => {
  const { shortenName } = useParams()

  useEffect(() => {
    const shortenUrl = `${getCurrentOrigin()}/${shortenName}`
    fetchOriginalUrl({ shortenUrl })
  }, [shortenName, fetchOriginalUrl])

  useEffect(() => {
    if (originalUrl) window.location = originalUrl;
  }, [originalUrl])

  return (
    <div>
      loading...
    </div>
  )

}

const mapStateToProps = state => ({
  originalUrl: get(state, 'url.originalUrl')
})

const mapDispatchToProps = dispatch => ({
  fetchOriginalUrl: payload => dispatch(fetchOriginalUrlRequest(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetLinkPage)
