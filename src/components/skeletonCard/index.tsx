import {SkeletonCardContainer,SkeletonCardBody} from './styles'

export default function SkeletonCard() {
  return (
    <SkeletonCardContainer>
      <SkeletonCardBody>
        <img src="#"/>
        <div className="card_title">
          <h2 /> <span />
        </div>
        <p />
      </SkeletonCardBody>
      <button />
    </SkeletonCardContainer>
  )
}
